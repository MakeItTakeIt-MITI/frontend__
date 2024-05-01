import { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "../components/common/FormInputs";

const meta = {
    title: "Inputs",
    component: FormInput,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmailInputField: Story = {
    args: {
        type: "email",
        id: "email",
        role: "user-email-input",
        placeholder: "이메일을 입력해주세요",
        register_type: "email",
        requiredValue: true,

    },
};

export const PasswordInputField: Story = {
    args: {
        id: "password",
        role: "user-password-input",
        placeholder: "8자리 이상의 PW를 입력해주세요.",
        register_type: "password",
        requiredValue: true,

    },
};

export const SignupEmailField: Story = {
    args: {
        type: "email",
        id: "email",
        role: "input-email",
        placeholder: "이메일을 입력해주세요",
        register_type: "email",
        requiredValue: true,

    },
};
export const SignupPasswordField: Story = {
    args: {
        type: "password",
        id: "password",
        role: "input-password",
        placeholder: "비밀번호를 입력해주세요.",
        register_type: "password",
        requiredValue: true,
    },
};

export const SignupConfirmPasswordField: Story = {
    args: {
        type: "password",
        id: "password_check",
        role: "input-password-check",
        placeholder: "비밀번호를 한번 더 입력해주세요.",
        register_type: "password_check",
        requiredValue: true,
    },
};

export const SignupNameField: Story = {
    args: {
        type: "text",
        id: "name",
        role: "input-name",
        placeholder: "이름을 입력해주세요.",
        register_type: "name",
        requiredValue: true,
    },
};
export const SignupNicknameField: Story = {
    args: {
        type: "text",
        id: "nickname",
        role: "input-nickname",
        placeholder: "닉네임을 입력해주세요.",
        register_type: "nickname",
        requiredValue: true,
    },
};

export const SignupDateField: Story = {
    args: {
        type: "date",
        id: "birthday",
        role: "user-birthday",
        placeholder: "",
        register_type: "birthday",
        requiredValue: true,
    },
};
export const SignupPhoneField: Story = {
    args: {
        type: "string",
        id: "phone",
        role: "",
        placeholder: "'-'을 제외한 휴대폰번호를 입력해주세요.",
        register_type: "phone",
        requiredValue: true,
    },
};
