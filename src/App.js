import React, { Component, Fragment } from 'react';
import { Button, Layout, Row, Col, Modal, Form, Switch } from 'antd';
import TestForm from 'components/TestForm'
import 'App.css';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowModal: false,
      formRef: null,
      fields: {
        username: {
          value: 'benjycui'
        },
        password: {
          value: '123'
        },
        switch: {
          value: true
        },
        email: {
          value: `test@test.com`
        }
      },
    };
  }

  _showModal = () => {
    const that = this;
    const formRef = Form.create({
      onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
      },
      mapPropsToFields(props) {
        return {
          username: Form.createFormField({
            ...props.username,
            value: props.username.value,
          }),
          password: Form.createFormField({
            ...props.password,
            value: props.password.value,
          }),
          switch: Form.createFormField({
            ...props.switch,
            value: props.switch.value
          }),
          email: Form.createFormField({
            ...props.email,
            value: props.email.value,
          })
        };
      },
      onValuesChange(_, values) {
        const fields = {..._};
        that.setState({fields});
        console.log(_);
        console.log(values);
      },
    })(props => (<TestForm {...props} />));

    this.setState({
      isShowModal: true,
      formRef
    });
  };

  _hideModal = () => this.setState({ isShowModal: false, formRef: undefined });

  _handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  };

  _enableEmailFieldByDefault = (checked) => {
    const fields = { ...this.state.fields };
    fields.switch.value = checked;
    this.setState({ fields });
  };

  render() {
    const fields = this.state.fields;
    const modalConfig = {
      title: `Test modal form`,
      onOk: () => { },
      onCancel: this._hideModal,
      visible: this.state.isShowModal
    };

    const CustomForm = this.state.formRef;

    return (
      <Layout>
        <Header style={{ color: '#fff', textAlign: 'center', fontSize: '1.5em' }}>
          Traning version for ant design + React
        </Header>
        <Content>
          <Row gutter={25} style={{ paddingTop: 25 }}>
            <Col span={11} />
            <Col span={2}>
              <Button onClick={this._showModal} type='primary' size='large'>Show modal</Button>
              <Switch onChange={this._enableEmailFieldByDefault} checked={this.state.fields.switch.value} />
              <Modal {...modalConfig}>
                {
                  CustomForm ?
                    <CustomForm  {...fields} onChange={this._handleFormChange} /> :
                    <Fragment />
                }
              </Modal>
            </Col>
            <Col span={11} />
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
