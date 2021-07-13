import { isEmail } from 'src/utils/helper'

export const rules = {
  email: {
    require: {
      value: true,
      message: 'Email là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Email có độ dài từ 6 - 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài tối đa 160 ký tự'
    },
    validate: {
      email: v => isEmail(v) || 'Email không đúng định dạng'
    }
  },

  password: {
    require: {
      value: true,
      message: 'Mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6 - 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài tối đa 160 ký tự'
    }
  },

  confirmedPassword: {
    require: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu có độ dài tối đa 160 ký tự'
    }
  }
}
