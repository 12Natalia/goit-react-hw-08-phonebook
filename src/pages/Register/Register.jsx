import {
  Label,
  FormReg,
  SubmitButton,
  InputReg,
  InputPassword,
  RegMail,
  RegUser,
  RegPassWord,
  LinkToLog,
  ContLabel,
  Container,
  TitleReg,
} from './Register.styled';

import { register } from 'Redux/Authorization/operations';
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {
  const [form] = FormReg.useForm();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const onFinish = values => {
    const { name, email, password, confirm } = values;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && !error && form.resetFields();
    }
  };

  return (
    <section>
      <Container>
        <FormReg
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <TitleReg>Register new user</TitleReg>
          <Label
            name="name"
            label="Name"
            tooltip="The first letter of the name will be in your avatar"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
                whitespace: true,
              },
            ]}
          >
            <InputReg prefix={<RegUser />} />
          </Label>
          <Label
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <InputReg prefix={<RegMail />} />
          </Label>
          <Label
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <InputPassword
              prefix={<RegPassWord />}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"
            />
          </Label>
          <Label
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <InputPassword prefix={<RegPassWord />} />
          </Label>

          <Label>
            {' '}
            <SubmitButton type="default" htmlType="submit">
              Register
            </SubmitButton>{' '}
            <ContLabel>
              or <LinkToLog to="/login"> log in</LinkToLog>if you are already
              registered{' '}
            </ContLabel>
          </Label>
        </FormReg>
      </Container>
    </section>
  );
}
