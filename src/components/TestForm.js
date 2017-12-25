import React, { Component, Fragment } from 'react';
import { Form, Icon, Input, Button, Checkbox, Switch } from 'antd';
const FormItem = Form.Item;

class TestForm extends Component {
    constructor(props) {
        super(props)

        console.log(`TestForm constructor fire.`);
    }

    componentWillUnmount() {
        console.log(`TestForm unmount fire.`);
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )
                    }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )
                    }
                </FormItem>
                <FormItem label="Show email field" >
                    {getFieldDecorator('switch', { valuePropName: 'checked' })(
                        <Switch />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
                        )
                    }
                </FormItem>
            </Form>
        );
    }
}

export default TestForm;