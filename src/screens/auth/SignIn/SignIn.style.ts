import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  sign_in: {},
  input_phone: {
    marginTop: 36,
    marginBottom: 24,
  },
  input_password: {
    marginBottom: 16,
  },
  sign_in_list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sign_in_remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sign_in_remember_checkbox: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
  },
  sign_in_remember_text: {
    fontSize: 12,
    marginBottom: 4,
    color: Colours.BACKGROUND[500],
  },
  sign_in_list_text: {
    fontSize: 12,
    fontWeight: '600',
    color: Colours.BACKGROUND[400],
  },
  sign_in_loginWidth: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sign_in_loginWidth_line: {
    width: 40,
    height: 1,
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[200],
  },
  sign_in_loginWidth_text: {
    marginHorizontal: 24,
    fontSize: 12,
    color: Colours.BACKGROUND[300],
  },
  sign_in_icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  sign_in_icon: {
    marginHorizontal: 12,
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: Colours.BACKGROUND[100],
  },
  sign_in_btn: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sign_in_not_account: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sign_in_not_account_text_left: {
    marginRight: 4,
    fontSize: 13,
    color: Colours.BACKGROUND[600],
  },
  sign_in_not_account_text_right: {
    fontSize: 13,
    color: Colours.RED[500],
  },
  sign_in_footer_login: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 24,
    marginHorizontal: 16,
    backgroundColor: Colours.BACKGROUND[50],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  sign_in_footer_login_text: {
    marginLeft: 11,
    fontSize: 12,
    fontWeight: '600',
    color: Colours.BACKGROUND[600],
  },
});

export default styles;
