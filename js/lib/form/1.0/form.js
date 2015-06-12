define(function(require, exports, module) {
    var $, jQuery;
    $ = jQuery = require("jquery"),
    require("validate");
    var form = {};
    form.err = {
        required: "不能为空",
        remoteCode: "验证码输入错误",
        isEmail: "请输入有效的邮箱地址",
        equalPsw: "您输入的密码不一致",
        length: "字数超过限制",
        minPswLength: "密码长度只能在6-20位字符之间",
        maxPswLength: "密码长度只能在6-20位字符之间",
        isMobile: "手机号码格式不正确，请重新输入",
        isMobileOrEmail: "请输入正确的邮箱地址或手机号码",
        isNickName: "用户名只能由中文、英文字母、数字、下划线组成",
        isRealName: "包含非法字符",
        isHasUnderlineFrontEnd: "不能以下划线开头或结尾",
        isNickNameLength: "用户名长度只能是4-16位字符之间",
        isHasYX: "前缀请不要使用“YX_”,且后缀请不要使用“_yx”",
        nickNameRemote: "用户名已存在",
        userNameRemote: "该手机号码已被使用",
        isPassWord: "包含非法字符",
        isPassNotAllNum: "密码不能全为数字",
        isPassNotRepeat: "密码不能为同一个字符",
        equalTo: "您输入的密码不一致",
        agree: "请同意我们的协议",
        maxLoanTitle: "借款标题不能超过14字",
        isOneDecimal: "利率最大保留小数点后1位",
        isMonth: "请输入3-24个月",
        isRateOver: "年化收益率范围须为1%-24%",
        minLoanDescription: "借款描述应限制在20-500字之间",
        maxLoanDescription: "借款描述应限制在20-500字之间",
        minRealNameLength: "姓名长度在2-32字之间",
        maxRealNameLength: "姓名长度在2-32字之间",
        isPostCode: "邮政编码须为6位数字",
        isIDNum: "请正确输入您的二代身份证号码",
        isPhone: "请正确输电话号码",
        isUrl: "请输入正确的网址",
        isAmount: "请输入正确的金额",
        isLingAmount: "投资金额须是50的倍数",
        isBaoAmount: "加入金额须是1000的倍数",
        minAmount: "单笔充值金额应大于10元",
        maxAmount: "单笔充值金额应小于或等于10000万元",
        bankRequired: "请选择充值方式",
        userBankId: "请选择提现银行卡",
        isEnough: "提现金额不能大于账户余额！",
        equalToBank: "您输入的银行卡号不一致",
        bankCardLength: "银行卡号须为12-19位数字",
        isBankCard: "银行卡号输入错误",
        isEducationCode: "学历在线验证码须为12位数字",
        isIntNum: "请输入正整数",
        isPositiveIn: "请输入正整数",
        codeLength: "请输入正确验证码",
        minCachLength: "提现金额不能小于2元",
        maxCachLength: "单笔提现金额应不大于20万元",
        intention: "请选择角色",
        maxInvestAmount: "金额最大值为十亿",
        isCode: "验证码需为6位数字",
        length1000: "请完整填写后提交"
    },
    form.tip = {},
    form.checkCode = function(opt) {
        opt.ele.rules("add", {
            remote: {
                url: opt.url || "/account/checkCode.action",
                data: opt.data,
                dataFilter: function(data) {
                    var json = jQuery.parseJSON(data);
                    return "true" == json.result ? (opt.success && "function" == typeof opt.success && opt.success.call(this, data), !0) : (opt.failed && "function" == typeof opt.failed && opt.failed.call(this, data), !1)
                }
            },
            messages: {
                remote: form.err.remoteCode
            }
        })
    },
    form.validateData = {
        errorPlacement: function(error, element) {
            error.appendTo(element.parent())
        },
        rules: {
            register: {
                rnickname: {
                    required: !0,
                    isNickName: !0,
                    isHasUnderlineFrontEnd: !0,
                    isNickNameLength: !0,
                    remote: {
                        url: "/user/checkName",
                        type: "post",
                        data: {
                            name: function() {
                                return $("#rnickname").val()
                            }
                        }
                    }
                },
                mobile: {
                    required: !0,
                    isMobile: !0,
                    remote: {
                        url: "/user/checkMobile",
                        type: "post",
                        data: {
                            name: function() {
                                return $("#mobile").val()
                            }
                        }
                    }
                },
                rpassword: {
                    required: !0,
                    minlength: 6,
                    maxlength: 20,
                    isPassWord: !0,
                    isPassNotRepeat: !0
                },
                rePassword: {
                    required: !0,
                    equalTo: "#rpassword"
                },
                mobileCode: {
                    required: !0,
                    minlength: 4,
                    maxlength: 8,
                    remote: {
                        url: "/user/verifyMobileCode",
                        type: "get",
                        data: {
                            mobile: function() {
                                return $("#mobile").val()
                            },
                            id: function() {
                                return $("#verifyId").val()
                            },
                            code: function() {
                                return $("#mobileCode").val()
                            }
                        }
                    }
                },
                invitedId: {
                    isMobile: !0,
                    required: !1
                },
                agree: {
                    required: !0
                }
            },
            login: {
                name: {
                    required: !0
                },
                password: {
                    required: !0
                },
                code: {
                    required: !0
                }
            },
            reSetMobileStepOne: {
                code: {
                    required: !0,
                    isCode: !0
                }
            },
            reSetMobileStepTwo: {
                newMobile: {
                    required: !0,
                    isMobile: !0,
                    remote: {
                        url: "/userCenter/changeMobile/checkMobile"
                    }
                },
                code: {
                    required: !0,
                    isCode: !0
                }
            },
            calcBao: {
                borrowAmount: {
                    required: !0,
                    isAmount: !0,
                    isBaoAmount: !0,
                    max: 1e9
                },
                keepDate: {
                    min: 0,
                    isIntNum: !0,
                    maxDate: !0
                }
            },
            calcRegular: {
                amount: {
                    required: !0,
                    isAmount: !0,
                    isBaoAmount: !0,
                    isPositiveIn: !0,
                    isIntNum: !0,
                    max: 1e9
                },
                keepDate: {
                    min: 0,
                    isIntNum: !0,
                    maxDate: !0
                }
            },
            calcLing: {
                borrowAmount: {
                    required: !0,
                    isAmount: !0,
                    isLingAmount: !0,
                    isPositiveIn: !0,
                    isIntNum: !0,
                    max: 1e9
                },
                yearRate: {
                    required: !0,
                    isOneDecimal: !0,
                    isRateOver: !0
                }
            },
            calcPlan: {
                amount: {
                    required: !0,
                    isAmount: !0,
                    isBaoAmount: !0,
                    isPositiveIn: !0,
                    isIntNum: !0,
                    max: 1e9
                },
                period: {
                    required: !0,
                    isMonth: !0,
                    isIntNum: !0
                }
            },
            loginPsw: {
                oldPlainPassword: {
                    required: !0
                },
                newPlainPassword: {
                    required: !0,
                    minlength: 6,
                    maxlength: 20,
                    isPassWord: !0,
                    isPassNotRepeat: !0
                },
                renewPlainPassword: {
                    required: !0,
                    equalTo: "#newPlainPassword"
                }
            },
            withdrawPswStep1: {
                code: {
                    required: !0,
                    isCode: !0
                }
            },
            withdrawPswStep2: {
                loginPwd: {
                    required: !0
                },
                cashPwd: {
                    required: !0,
                    minlength: 6,
                    maxlength: 20,
                    isPassWord: !0,
                    isPassNotRepeat: !0
                },
                pwdVerify: {
                    required: !0,
                    equalTo: "#cashPwd"
                }
            },
            bindMobile: {
                mobile: {
                    required: !0,
                    isMobile: !0,
                    remote: {
                        url: "/user/checkName",
                        type: "POST",
                        data: {
                            name: function() {
                                return $("#mobile").val()
                            }
                        }
                    }
                },
                code: {
                    required: !0,
                    isCode: !0
                }
            },
            bindId: {
                realName: {
                    required: !0,
                    isRealName: !0
                },
                idNo: {
                    required: !0,
                    isIDNum: !0
                },
                code: {
                    required: !0
                }
            },
            bindEmail: {
                email: {
                    required: !0,
                    isEmail: !0
                },
                code: {
                    required: !0
                }
            },
            findPswStep1: {
                name: {
                    required: !0
                },
                code: {
                    required: !0
                }
            },
            findPswStep2: {
                code: {
                    required: !0
                }
            },
            findPswStep3: {
                newPlainPassword: {
                    required: !0,
                    minlength: 6,
                    maxlength: 20,
                    isPassWord: !0,
                    isPassNotRepeat: !0
                },
                rePassword: {
                    required: !0,
                    equalTo: "#newPlainPassword"
                }
            },
            recharge: {
                cbk: {
                    required: !0
                },
                money: {
                    required: !0,
                    isAmount: !0,
                    min: 10,
                    max: 1e8
                }
            },
            addBank: {
                bankCName: {
                    required: !0
                },
                bankNo: {
                    required: !0,
                    minlength: 12,
                    maxlength: 19,
                    isBankCard: !0
                },
                bankSubbranch: {
                    required: !0
                },
                address: {
                    required: !0
                }
            },
            withdraw: {
                bankId: {
                    required: !0
                },
                money: {
                    required: !0,
                    isAmount: !0,
                    min: 2,
                    max: 2e5,
                    isEnough: !0
                },
                crashPwd: {
                    required: !0
                },
                bankSubbranch: {
                    required: !0
                },
                address: {
                    required: !0
                }
            }
        },
        messages: {
            register: {
                rnickname: {
                    required: form.err.required,
                    isNickName: form.err.isNickName,
                    isHasUnderlineFrontEnd: form.err.isHasUnderlineFrontEnd,
                    isNickNameLength: form.err.isNickNameLength,
                    remote: function(n) {
                        var res = "";
                        return res = $("#registerForm").data("login") === !0 ? '该用户名已存在，是您本人可<a href="/user/login?user=' + n + '">立即登录</a>': form.err.nickNameRemote
                    }
                },
                mobile: {
                    required: form.err.required,
                    isMobile: form.err.isMobile,
                    remote: function(n) {
                        var res = "";
                        return res = $("#registerForm").data("login") === !0 ? '该手机号存在，是您本人可<a href="/user/login?user=' + n + '">立即登录</a>': form.err.userNameRemote
                    }
                },
                rpassword: {
                    required: form.err.required,
                    isPassWord: form.err.isPassWord,
                    isPassNotRepeat: form.err.isPassNotRepeat,
                    minlength: form.err.minPswLength,
                    maxlength: form.err.maxPswLength
                },
                rePassword: {
                    required: form.err.required,
                    equalTo: form.err.equalTo
                },
                mobileCode: {
                    required: form.err.required,
                    minlength: form.err.codeLength,
                    maxlength: form.err.codeLength,
                    remote: form.err.remoteCode
                },
                invitedId: {
                    required: form.err.required,
                    isMobile: form.err.isMobile
                },
                agree: {
                    required: form.err.agree
                }
            },
            login: {
                name: {
                    required: form.err.required
                },
                password: {
                    required: form.err.required
                },
                code: {
                    required: form.err.required
                }
            },
            reSetMobileStepOne: {
                code: {
                    required: form.err.required,
                    isCode: form.err.isCode
                }
            },
            reSetMobileStepTwo: {
                newMobile: {
                    required: form.err.required,
                    isMobile: form.err.isMobile,
                    remote: form.err.userNameRemote
                },
                code: {
                    required: form.err.required,
                    isCode: form.err.isCode
                }
            },
            calcBao: {
                borrowAmount: {
                    required: form.err.required,
                    isAmount: form.err.isAmount,
                    isBaoAmount: form.err.isBaoAmount,
                    max: form.err.maxInvestAmount
                },
                keepDate: {
                    required: form.err.required,
                    isIntNum: form.err.isIntNum,
                    min: "继续持有值最小值为0个月"
                }
            },
            calcRegular: {
                amount: {
                    required: form.err.required,
                    isAmount: form.err.isAmount,
                    isBaoAmount: form.err.isBaoAmount,
                    max: form.err.maxInvestAmount,
                    isPositiveIn: form.err.isPositiveIn,
                    isIntNum: form.err.isIntNum
                },
                keepDate: {
                    required: form.err.required,
                    isIntNum: form.err.isIntNum,
                    min: "继续持有值最小值为0个月"
                }
            },
            calcPlan: {
                amount: {
                    required: form.err.required,
                    isAmount: form.err.isAmount,
                    isBaoAmount: form.err.isBaoAmount,
                    max: form.err.maxInvestAmount,
                    isPositiveIn: form.err.isPositiveIn,
                    isIntNum: form.err.isIntNum
                },
                period: {
                    required: form.err.required,
                    isRateOver: form.err.isMonth,
                    isIntNum: form.err.isIntNum
                }
            },
            calcLing: {
                borrowAmount: {
                    required: form.err.required,
                    isAmount: form.err.isAmount,
                    isLingAmount: form.err.isLingAmount,
                    isPositiveIn: form.err.isPositiveIn,
                    isIntNum: form.err.isIntNum,
                    max: form.err.maxInvestAmount
                },
                yearRate: {
                    required: form.err.required,
                    isOneDecimal: form.err.isOneDecimal,
                    isRateOver: form.err.isRateOver
                }
            },
            loginPsw: {
                oldPlainPassword: {
                    required: form.err.required
                },
                newPlainPassword: {
                    required: form.err.required,
                    isPassWord: form.err.isPassWord,
                    isPassNotRepeat: form.err.isPassNotRepeat,
                    minlength: form.err.minPswLength,
                    maxlength: form.err.maxPswLength
                },
                renewPlainPassword: {
                    required: form.err.required,
                    equalTo: "您输入的确认新密码与新密码不一致"
                }
            },
            withdrawPswStep1: {
                code: {
                    required: form.err.required,
                    isCode: form.err.isCode
                }
            },
            withdrawPswStep2: {
                loginPwd: {
                    required: form.err.required
                },
                cashPwd: {
                    required: form.err.required,
                    isPassWord: form.err.isPassWord,
                    isPassNotRepeat: form.err.isPassNotRepeat,
                    minlength: form.err.minPswLength,
                    maxlength: form.err.maxPswLength
                },
                pwdVerify: {
                    required: form.err.required,
                    equalTo: form.err.equalTo
                }
            },
            bindMobile: {
                mobile: {
                    required: form.err.required,
                    isMobile: form.err.isMobile,
                    remote: form.err.userNameRemote
                },
                code: {
                    required: form.err.required,
                    isCode: form.err.isCode
                }
            },
            bindId: {
                realName: {
                    required: form.err.required,
                    isRealName: form.err.isRealName
                },
                idNo: {
                    required: form.err.required,
                    isIDNum: form.err.isIDNum
                },
                code: {
                    required: form.err.required
                }
            },
            bindEmail: {
                email: {
                    required: form.err.required,
                    isEmail: form.err.isEmail
                },
                code: {
                    required: form.err.required
                }
            },
            findPswStep1: {
                name: {
                    required: form.err.required
                },
                code: {
                    required: form.err.required
                }
            },
            findPswStep2: {
                code: {
                    required: form.err.required
                }
            },
            findPswStep3: {
                newPlainPassword: {
                    required: form.err.required,
                    isPassWord: form.err.isPassWord,
                    isPassNotRepeat: form.err.isPassNotRepeat,
                    minlength: form.err.minPswLength,
                    maxlength: form.err.maxPswLength
                },
                rePassword: {
                    required: form.err.required,
                    equalTo: form.err.equalTo
                }
            },
            recharge: {
                cbk: {
                    required: "请选择充值银行卡"
                },
                money: {
                    required: form.err.required,
                    isAmount: form.err.isAmount,
                    min: form.err.minAmount,
                    max: form.err.maxAmount
                }
            },
            addBank: {
                bankCName: {
                    required: form.err.required
                },
                bankNo: {
                    required: form.err.required,
                    minlength: form.err.bankCardLength,
                    maxlength: form.err.bankCardLength,
                    isBankCard: form.err.isBankCard
                },
                bankSubbranch: {
                    required: form.err.required
                },
                address: {
                    required: form.err.required
                }
            },
            withdraw: {
                bankId: {
                    required: "请选择银行卡"
                },
                money: {
                    required: form.err.required,
                    isAmount: form.err.isAmount,
                    min: form.err.minCachLength,
                    max: form.err.maxCachLength,
                    isEnough: form.err.isEnough
                },
                crashPwd: {
                    required: form.err.required
                },
                bankSubbranch: {
                    required: form.err.required
                },
                address: {
                    required: form.err.required
                }
            }
        }
    },
    form.log = function(m) {
        window.console && window.console.log && window.console.log(m)
    },
    form.msg = function(msgafter, msg, type) {
        if (void 0 !== msgafter) {
            if ($msgafter = $(msgafter), !$msgafter.length) return void form.log("'msgafter' element can't find!");
            void 0 === type && (type = "log");
            var $msg = $msgafter.parent().find(".form-msg");
            if ($msg.length) return void $msg.html("<span class='" + type + "'>" + msg + "</span>");
            $msg = $("<span class='form-msg'></span>").insertAfter($msgafter).slideUp().html("<span class='" + type + "'>" + msg + "</span>").slideDown(),
            $msg.delay(8e3).slideUp(function() {
                $(this).remove()
            })
        } else form.log(msg)
    },
    form.is = {
        isDate: function(intYear, intMonth, intDay) {
            if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) return ! 1;
            if (intMonth > 12 || 1 > intMonth) return ! 1;
            if (1 > intDay || intDay > 31) return ! 1;
            if ((4 == intMonth || 6 == intMonth || 9 == intMonth || 11 == intMonth) && intDay > 30) return ! 1;
            if (2 == intMonth) {
                if (intDay > 29) return ! 1;
                if ((intYear % 100 === 0 && intYear % 400 !== 0 || intYear % 4 !== 0) && intDay > 28) return ! 1
            }
            return ! 0
        },
        isIDNum: function(cId) {
            var pattern;
            if (18 != cId.length) return ! 1;
            if (pattern = /^\d{17}(\d|x|X)$/, !pattern.exec(cId)) return ! 1;
            if (!form.is.isDate(cId.substring(6, 10), cId.substring(10, 12), cId.substring(12, 14))) return ! 1;
            for (var strJiaoYan = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], intQuan = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1], intTemp = 0, i = 0; i < cId.length - 1; i++) intTemp += cId.substring(i, i + 1) * intQuan[i];
            return intTemp %= 11,
            cId.substring(cId.length - 1, cId.length).toUpperCase() != strJiaoYan[intTemp] ? !1 : !0
        },
        isUserName: function(n) {
            var myreg = /^\w+(@)\w+(\.\w+)(\.\w+|)$/,
            mobile = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            return myreg.test(n) || mobile.test(n)
        },
        isRealName: function(n) {
            return /^[\u4E00-\u9FA5]+$/.test(n)
        },
        isNickName: function(n) {
            return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(n)
        },
        isHasUnderlineFrontEnd: function(v) {
            return /^(?!_)(?!.*?_$).*$/.test(v)
        },
        isHasYX: function(v) {
            return ! /^(YX_|yx_|yX_|Yx_).*|(.*(_YX|_yx|_yX|_Yx)$)/.test(v)
        },
        isNickNameLength: function(v) {
            function getLength(str) {
                for (var len = str.length,
                reLen = 0,
                i = 0; len > i; i++) str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126 ? reLen += 2 : reLen++;
                return reLen
            }
            return getLength($.trim(v)) <= 16 && getLength($.trim(v)) >= 4
        },
        isPassWord: function(p) {
            return /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{1,30}$/.test(p)
        },
        isPassNotAllNum: function(v) {
            return ! /^\d{1,}$/.test(v)
        },
        isPassNotRepeat: function(v) {
            return ! new RegExp(/^(.)\1+$/).test(v)
        },
        isMobile: function(t) {
            return /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(t)
        },
        isPhone: function(p) {
            return /^0\d{2,3}[-]?\d{8}$|^0\d{3}[-]?\d{7,8}$/.test(p)
        },
        isEmail: function(e) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
        },
        isMobileOrEmail: function(v) {
            return this.isMobile(v) || this.isEmail(v)
        },
        isUrl: function(v) {
            return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(v)
        },
        isAmount: function(v) {
            return /^[0-9]*(\.[0-9]{1,2})?$/.test(v)
        },
        isLingAmount: function(v) {
            return v % 50 === 0 && /^(([1-9]{1}\d*)|([0]{1}))?$/.test(v)
        },
        isBaoAmount: function(v) {
            return v % 1e3 === 0 && /^(([1-9]{1}\d*)|([0]{1}))?$/.test(v)
        },
        isRegularAmount: function(v) {
            return v % 1e3 === 0 && /^(([1-9]{1}\d*)|([0]{1}))?$/.test(v)
        },
        isPostCode: function(v) {
            return /^\d{6}$/.test(v)
        },
        isBankCard: function(v) {
            return /^\d{12,19}$/.test(v)
        },
        isEducationCode: function(v) {
            return /^\d{12}$/.test(v)
        },
        isIntNum: function(v) {
            return /^\d+$/.test(v)
        },
        isPositiveIn: function(v) {
            return /^[1-9]*[1-9][0-9]*$/.test(v)
        },
        isOneDecimal: function(v) {
            return /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1})?$/.test(v)
        },
        isCode: function(v) {
            return /^\d{6}$/.test(v)
        },
        length1000: function(v) {
            return $.trim(v).length >= 0 && $.trim(v).length <= 1e3 ? !0 : !1
        },
        isLuhn: function(v) {
            if (/[^0-9-\s]+/.test(v)) return ! 1;
            var nCheck = 0,
            nDigit = 0,
            bEven = !1;
            v = v.replace(/\D/g, "");
            for (var n = v.length - 1; n >= 0; n--) {
                var cDigit = v.charAt(n);
                nDigit = parseInt(cDigit, 10),
                bEven && (nDigit *= 2) > 9 && (nDigit -= 9),
                nCheck += nDigit,
                bEven = !bEven
            }
            return nCheck % 10 === 0
        }
    },
    form.isEmptyObj = function(obj) {
        var ret = !0;
        if ("[object Array]" === Object.prototype.toString.call(obj)) ret = !obj.length;
        else {
            obj = new Object(obj);
            for (var key in obj) return ! 1
        }
        return ret
    },
    form.comma = function(n, length) {
        var source = n;
        return (!length || 1 > length) && (length = 3),
        source = String(source).split("."),
        source[0] = source[0].replace(new RegExp("(\\d)(?=(\\d{" + length + "})+$)", "ig"), "$1,"),
        source.join(".")
    },
    $.extend({
        uniqueArray: function(source, compareFn) {
            var i, datum, len = source.length,
            result = source.slice(0);
            for ("function" != typeof compareFn && (compareFn = function(item1, item2) {
                return item1 === item2
            }); --len > 0;) for (datum = result[len], i = len; i--;) if (compareFn(datum, result[i])) {
                result.splice(len, 1);
                break
            }
            return result
        }
    }),
    form.addValidateMethod = function(arr) {
        "array" == $.type(arr) && $.each(arr,
        function(k, v) {
            jQuery.validator.addMethod(v,
            function(value, element) {
                return this.optional(element) || form.is[v](value)
            })
        })
    },
    form.placeholder = function() {
        $(".ui-form").on("click", ".placeholder",
        function() {
            $(this).hide().parent().children("input").trigger("focus")
        }).on("focus", "input",
        function() {
            $(this).parent().children(".placeholder").hide()
        }).on("blur", "input",
        function() {
            this.value || $(this).parent().children(".placeholder").show()
        }).find("input").trigger("focus")
    },
    form.randImage = function(target) {
        var $randImage = $("undefined" == typeof target ? "#randImage": target);
        $randImage.length > 0 && $randImage.click(function() {
            $(this).attr("src", "/image.jsp?" + Math.random())
        })
    },
    form.tipfocus = function(element, tipmsg) {
        var $focus = element.parent().find("[for=" + element.attr("name") + "]");
        $focus.length ? $focus.addClass("focus").html(tipmsg).show() : $('<label for="' + element.attr("name") + '" class="error valid focus"></label>').html(tipmsg).appendTo(element.parent("div"))
    },
    form.tipblur = function(element) {
        var $focus = element.parent().find("[for=" + element.attr("name") + "]");
        $focus.hasClass("error valid focus") ? $focus.remove() : $focus.removeClass("focus")
    },
    form.setPhone = function(id1, id2, tagetPhoneId) {
        function checkv() {
            var $id1v = $id1.val(),
            $id2v = $id2.val();
            $id1v && $id2v ? $tagetPhoneId.val($id1v + "-" + $id2v).keyup() : $tagetPhoneId.val("").keyup()
        }
        var $id1 = $("#" + id1),
        $id2 = $("#" + id2),
        $tagetPhoneId = $("#" + tagetPhoneId),
        $tagetV = $("#" + tagetPhoneId).val();
        $tagetV && /-/.test($tagetV) ? ($id1.val($tagetV.split("-")[0]), $id2.val($tagetV.split("-")[1])) : $id2.val($tagetPhoneId.val()),
        $id1.add($id2).bind("keyup",
        function() {
            checkv()
        }),
        $id1.add($id2).bind("blur",
        function() {
            checkv(),
            $tagetPhoneId.trigger("blur")
        }),
        $tagetPhoneId.css({
            height: "0px",
            width: "0px",
            border: "1px dashed #fff"
        }).show().keyup()
    },
    form.notRequired = function($form) {
        $form.find(":text,[type='password'],[type='checkbox'],[type='radio'],[type='file'],select,textarea").each(function() {
            $(this).data("required", "false")
        })
    },
    form.removeRequired = function($form) {
        $form.find(":text,[type='password'],[type='checkbox'],[type='radio'],[type='file'],select,textarea").each(function() {
            $(this).removeData("required")
        })
    },
    form.init = function() {},
    $.validator.prototype.checkForm = function() {
        this.prepareForm();
        for (var i = 0,
        elements = this.currentElements = this.elements(); elements[i]; i++) if (this.findByName(elements[i].name).length && this.findByName(elements[i].name).length > 1) for (var cnt = 0; cnt < this.findByName(elements[i].name).length; cnt++) this.check(this.findByName(elements[i].name)[cnt]);
        else this.check(elements[i]);
        return this.valid()
    },
    function($) {
        if (document.all && !document.querySelector && $.fn.validate) {
            var origValidateFn = $.fn.validate,
            slice = Array.prototype.slice;
            $.fn.validate = function() {
                var args = slice.call(arguments, 0),
                origAttrFn = this.attr;
                return this.attr = function() {
                    var args = slice.call(arguments, 0);
                    return args.length > 1 && "novalidate" === args[0] ? this: origAttrFn.apply(this, args)
                },
                origValidateFn.apply(this, args)
            }
        }
    } (jQuery);
    var inputTheme = {
        success: function(label) {
            label.addClass("valid")
        },
        highlight: function(element, errorClass) {
            $(element).removeClass("input-bg-gray").addClass("input-bg-red").addClass("error");
            var $icon = $(element).siblings(".icon"),
            icon = $icon.attr("class");
            if (icon && /gray/.test(icon)) {
                var match = icon.match(/input-icon-(.*)-gray/);
                $icon.removeClass(match[0]).addClass("input-icon-" + match[1] + "-red")
            }
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass("input-bg-red error").addClass("input-bg-gray");
            var $icon = $(element).siblings(".icon"),
            icon = $icon.attr("class");
            if (icon && /red/.test(icon)) {
                var match = icon.match(/input-icon-(.*)-red/);
                $icon.removeClass(match[0]).addClass("input-icon-" + match[1] + "-gray")
            }
        }
    },
    showSingleError = {
        showErrors: function(errorMap, errorList) {
            var i, elements;
            for (i = 0; this.errorList[i]; i++) {
                var error = this.errorList[i];
                this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass),
                this.showLabel(error.element, error.message);
                break
            }
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
            if (this.settings.unhighlight) for (i = 0, elements = this.validElements(); elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow),
            this.hideErrors(),
            this.addWrapper(this.toShow).show()
        }
    };
    form.validate = function(opt) {
        var $target, def, len, result = {};
        def = {
            name: null,
            target: "form",
            fieldArr: [],
            validateMethodArr: [],
            validateData: {},
            tip: {},
            showTip: !1,
            inputTheme: !1,
            before: function(form, $target) {}
        };
        var getArrObj = function(obj, arr, fn) {
            var o = {},
            i = 0,
            len = arr.length;
            for (i; len > i; i++) for (var j in obj) if (arr[i].name == j) {
                o[j] = fn && "function" == typeof fn ? fn.apply(this, [j, obj[j], arr[i], obj]) : obj[j],
                delete obj[j];
                break
            }
            return o
        };
        if (def = $.extend(def, opt), $target = $(def.target), def.tip = $.extend(form.tip, def.tip), def.name = def.name || $target.data("name"), !def.name) throw "name is empty";
        if ("array" == $.type(def.fieldArr) && $target.find("input[type='text'],input[type='password'],input[type='checkbox'],input[type='radio'],input[type='file'],select,textarea").each(function() {
            var $this = $(this),
            dataIs = $this.data("is"),
            name = $this.attr("name"),
            obj = {};
            if (dataIs && (dataIs = $.trim(dataIs).split(/\s+/)), dataIs && dataIs.length) for (var i = 0,
            len = dataIs.length; len > i; i++) def.validateMethodArr.push(dataIs[i]);
            name && (obj.name = name, "false" == $this.data("required") ? obj.required = !1 : "true" == $this.data("required") && (obj.required = !0), obj.label = $this.parent().children(".ui-label").text().replace(/\*|：|\s/g, ""), def.fieldArr.push(obj)),
            def.showTip && $.each(def.tip,
            function(k, v) {
                return v && name == k ? ($this.focus(function() {
                    form.tipfocus($this, v)
                }).blur(function() {
                    form.tipblur($this)
                }), !1) : void 0
            })
        }), len = def.fieldArr.length, !len) throw "fieldArr is empty";
        return def.validateData = $.extend(form.validateData, def.validateData),
        $.each(def.validateData,
        function(k, v) {
            result[k] = "rules" == k ? getArrObj(v[def.name], def.fieldArr,
            function(k, v, a) {
                return (a.required || a.required === !1) && (v.required = !!a.required),
                v
            }) : "messages" == k ? getArrObj(v[def.name], def.fieldArr,
            function(k, v, a) {
                return v.required == form.err.required && (v.required = a.label + form.err.required),
                v
            }) : v
        }),
        form.addValidateMethod(def.validateMethodArr),
        $(".placeholder").length && form.placeholder(),
        def.before.call(this, form, $target),
        def.inputTheme && (result = $.extend(inputTheme, result)),
        def.showSingleError && (result = $.extend(showSingleError, result)),
        $target.validate(result)
    },
    module.exports = form
});