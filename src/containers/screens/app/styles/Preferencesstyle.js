import {StyleSheet, Platform} from 'react-native';
import {width, height} from '../../../../constants/ScreenSize';
import colors from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';
import fontsize from '../../../../constants/i18n/Fontsizes';
const styles = StyleSheet.create({
  container: {backgroundColor: colors.whitebackground, flex: 1},
  NormalText: {
    fontSize: fontsize.Regular,
    color: colors.gray,
    fontFamily: fonts.Regular,
  },
  titleText: {
    fontSize: fontsize.Large,
    fontFamily: fonts.Medium,
    marginBottom: width * (10 / 375),
  },
  itemView: {
    flex: 1,
    backgroundColor: '#FFF3DF',
    // height:width*(80/375),
    marginVertical: 2,
    padding: 10,
    paddingLeft: width * (35 / 375),
  },
  view4: {
    paddingHorizontal: width * (15 / 375),
    paddingVertical: width * (10 / 375),
    backgroundColor: colors.whitebackground,
    marginTop: width * (20 / 375),
    marginHorizontal: width * (15 / 375),
    borderRadius: width * (15 / 375),
  },
  buttonStyle2: {
    backgroundColor: colors.yellow,
    height: width * (50 / 375),
    width: width * (120 / 375),
    borderRadius: width * (25 / 375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: fontsize.Large,

    color: colors.white,
  },
  viewstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: width * (30 / 375),
    marginBottom: width * (7 / 375),
    paddingHorizontal: width * (22 / 375),
    height: width * (50 / 375),
    marginBottom: width * (15 / 375),
  },
  Pre_quizText: {
    alignSelf: 'center',
    fontSize: fontsize.Regular,
    margin: 10,
    textAlign: 'center',
  },
  viewstyle1: {
    flex: 0.1,
    alignItems: 'center',
  },
  Nextbutton: {
    backgroundColor: colors.yellow,
    height: width * (50 / 375),
    width: '90%',
    borderRadius: width * (50 / 375),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: width * (60 / 375),
    marginBottom: width * (30 / 375),
  },
  touchableStyle: {
    height: width * (20 / 375),
    width: width * (20 / 375),
    borderRadius: width * (20 / 375),
    borderColor: colors.checkbox,
    borderWidth: width * (2 / 375),
    padding: width * (2 / 375),
  },
  viewStyle2: {height: '100%', width: '100%', borderRadius: width * (20 / 375)},

  viewstyle3: {
    flex: 0.8,
    alignItems: 'center',
  },
  text1: {
    textAlign: 'center',
    marginVertical: width * (10 / 375),
    fontSize: width * (10 / 375),
    fontFamily: fonts.Regular,
  },
  Touch1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: width * (30 / 375),
    borderWidth: width * (0.5 / 375),
    height: width * (36 / 375),
    width: width * (200 / 375),
    borderColor: colors.gray3,
  },
  view84: {
    height: width * (30 / 375),
    width: width * (30 / 375),
    alignSelf: 'flex-end',
    marginBottom: width * (10 / 375),
  },
  view85: {
    borderRadius: width * (8 / 375),
    borderColor: '#FDBF5A',
    borderWidth: 2,
  },
  view86: {
    backgroundColor: 'rgb(255,255,255)',

    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: width * (15 / 375),
  },

  view87: {
    borderWidth: 0.5,
    borderColor: colors.gray3,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  view88: {
    color: colors.yellow,
    textAlign: 'center',
    marginVertical: width * (8 / 375),
  },
  view89: {
    paddingHorizontal: width * (75 / 375),
    paddingVertical: width * (20 / 375),
    backgroundColor: colors.whitebackground,
    marginTop: 20,
    marginHorizontal: width * (15 / 375),
    borderRadius: width * (25 / 375),
    marginBottom: width * (18 / 375),
  },
  view90: {
    marginTop: width * (2 / 375),
    color: 'red',
    fontSize: fontsize.Small,
  },
  view91: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: width * (30 / 375),
    borderWidth: 0.5,
    height: width * (36 / 375),
    width: width - 80,
    marginTop: width * (30 / 375),
    borderColor: colors.gray3,
  },
  view92: {
    alignSelf: 'flex-start',
    marginTop: width * (5 / 375),
    marginLeft: width * (10 / 375),
  },
  Removetext: {
    fontSize: 14,
    fontWeight: '700',
  },
  _rendernotiListstitle: {
    fontSize: fontsize.Regular, marginVertical: 2
  },
  buttonalign: {
    paddingHorizontal: width * (15 / 375),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: width * (10 / 375),
  },
  samebutton: {
    flexDirection: 'row',
    borderRadius: width * (30 / 375),
    height: width * (40 / 375),
    alignItems: 'center',
    width: width * (170 / 375),
    justifyContent: 'space-evenly',
  },
  Notetext: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    width: '95%',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
  },
});
export default styles;
