import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, Keyboard} from 'react-native';
import NavBar from '../../components/NavBar';
import {width} from '../../../constants/ScreenSize';
import Images from '../../../constants/images';
import colors from '../../../constants/colors';
import styles from '../../screens/app/styles/completeProfile';
import CommonStyles from '../../../assets/css/commonStyles';
import I18n from '../../../constants/i18n';
import {connect} from 'react-redux';
import defaultA from '../../../redux/actions/defaultA';
import completeProfileA from '../../../redux/actions/completeProfileA';
import SignItOut from '../../components/SignItOut';
import {ShowStatusBarWhite} from '../../components/Statusbar';
import {Container, Content} from 'native-base';
const completeProfile = props => {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  const [mBottom, setMBottom] = React.useState(500);

  const [agreeLogout, setAgreeLogout] = React.useState(false);
  const [profile_info, setProfileInfo] = React.useState(true);
  const [experience, setExperience] = React.useState(true);
  const [backGroundCheck, setBackGroundCheck] = React.useState(true);
  const [skills, setSkills] = React.useState(true);
  const [interview, setInterview] = React.useState(true);

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);
  useEffect(() => {
    const unsubscribeOnBlur = props.navigation.addListener('focus', () => {
      setTimeout(() => {
        props.completeProfileRequest();
      }, 500);
    });
    return unsubscribeOnBlur;
  }, []);
  const _keyboardDidShow = e => {
    setMBottom(e.endCoordinates.height);
    setKeyboardVisible(true);
  };

  const _keyboardDidHide = () => {
    setMBottom('100%');
    setKeyboardVisible(false);
  };

  return (
    <Container style={{backgroundColor: colors.whitebackground, flex: 1}}>
      <NavBar
        source={Images.backarrow}
        rightText={I18n.t('Profilecompletion')}
        lefttext={I18n.t('Back')}
        navigation={() => props.navigation.goBack()}></NavBar>
      <ShowStatusBarWhite />
      <SignItOut navigator={props.navigation} agreeLogout={agreeLogout} />
      <Content>
        <View style={styles.commonview}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProfileInformation')}
            style={[
              styles.commonopacity,
              {
                backgroundColor:
                  profile_info == false
                    ? colors.lightYellow
                    : colors.whitebackground,
              },
            ]}>
            <View style={[styles.viewstyle1, {}]}>
              <View style={styles.circleview}>
                <View
                  style={[
                    styles.viewStyle2,
                    {
                      backgroundColor:
                        profile_info == false
                          ? colors.yellow
                          : colors.whitebackground,
                    },
                  ]}></View>
              </View>
            </View>
            <View
              style={[
                styles.viewstyle3,
                {alignItems: 'flex-start', marginLeft: width * (15 / 375)},
              ]}>
              <Text
                style={[
                  CommonStyles.HeadingText3,
                  {
                    fontWeight: '600',
                    color:
                      profile_info == false ? colors.changeText : colors.black,
                  },
                ]}>
                {I18n.t('Profile_Information')}
              </Text>
            </View>
            <View style={[styles.viewstyle1, {}]}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.commonview}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('experience')}
            style={[
              styles.commonopacity,
              {
                backgroundColor:
                  experience == false
                    ? colors.lightYellow
                    : colors.whitebackground,
              },
            ]}>
            <View style={[styles.viewstyle1, {}]}>
              <View style={styles.circleview}>
                <View
                  style={[
                    styles.viewStyle2,
                    {
                      backgroundColor:
                        experience == false
                          ? colors.yellow
                          : colors.whitebackground,
                    },
                  ]}></View>
              </View>
            </View>
            <View
              style={[
                styles.viewstyle3,
                {alignItems: 'flex-start', marginLeft: width * (15 / 375)},
              ]}>
              <Text
                style={[
                  CommonStyles.HeadingText3,

                  {
                    fontWeight: '600',
                    color: experience == false ? colors.black : colors.black,
                  },
                ]}>
                {I18n.t('Workexperience')}
              </Text>
            </View>
            <View style={[styles.viewstyle1, {}]}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.commonview}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('BackgroundCheck')}
            style={[
              styles.commonopacity,
              {
                backgroundColor:
                  backGroundCheck == false
                    ? colors.lightYellow
                    : colors.whitebackground,
              },
            ]}>
            <View style={[styles.viewstyle1, {}]}>
              <View style={styles.circleview}>
                <View
                  style={[
                    styles.viewStyle2,
                    {
                      backgroundColor:
                        backGroundCheck == false
                          ? colors.yellow
                          : colors.whitebackground,
                    },
                  ]}></View>
              </View>
            </View>
            <View
              style={[
                styles.viewstyle3,
                {alignItems: 'flex-start', marginLeft: width * (15 / 375)},
              ]}>
              <Text
                style={[
                  CommonStyles.HeadingText3,
                  {
                    fontWeight: '600',
                    color:
                      backGroundCheck == false
                        ? colors.changeText
                        : colors.black,
                  },
                ]}>
                {I18n.t('background')}
              </Text>
            </View>
            <View style={[styles.viewstyle1, {}]}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.commonview}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('skills')}
            style={[
              styles.commonopacity,
              {
                backgroundColor:
                  skills == false ? colors.lightYellow : colors.whitebackground,
              },
            ]}>
            <View style={[styles.viewstyle1, {}]}>
              <View style={styles.circleview}>
                <View
                  style={[
                    styles.viewStyle2,
                    {
                      backgroundColor:
                        skills == false
                          ? colors.yellow
                          : colors.whitebackground,
                    },
                  ]}></View>
              </View>
            </View>
            <View
              style={[
                styles.viewstyle3,
                {alignItems: 'flex-start', marginLeft: width * (15 / 375)},
              ]}>
              <Text
                style={[
                  CommonStyles.HeadingText3,

                  {
                    fontWeight: '600',
                    color: skills == false ? colors.black : colors.black,
                  },
                ]}>
                {I18n.t('Skills')}
              </Text>
            </View>
            <View style={[styles.viewstyle1, {}]}></View>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.commonview,
            {borderBottomWidth: 1, borderBottomColor: '#ececec'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Presentation');
            }}
            style={[
              styles.commonopacity,
              {
               
                backgroundColor:
                  interview == false
                    ? colors.lightYellow
                    : colors.whitebackground,
              },
            ]}>
            <View style={[styles.viewstyle1, {}]}>
              <View style={styles.circleview}>
                <View
                  style={[
                    styles.viewStyle2,
                    {
                      backgroundColor:
                        interview == false
                          ? colors.yellow
                          : colors.whitebackground,
                    },
                  ]}></View>
              </View>
            </View>
            <View
              style={[
                styles.viewstyle3,
                {alignItems: 'flex-start', marginLeft: width * (15 / 375)},
              ]}>
              <Text
                style={[
                  CommonStyles.HeadingText3,
                  {
                    fontWeight: '600',
                    color:
                      interview == false ? colors.changeText : colors.black,
                  },
                ]}>
                {I18n.t('Presentation')}
              </Text>
            </View>
            <View style={[styles.viewstyle1, {}]}></View>
          </TouchableOpacity>
        </View>
        <Text
          style={
          styles.Thatittext}>
          {I18n.t('Thatit')}
        </Text>
        <Text
          style={styles.fullaccess}>
          {I18n.t('fullaccess')}
        </Text>

        <Image
          source={Images.rightCheck}
          resizeMode={'contain'}
          style={{alignSelf: 'center', marginTop: width * (10 / 375)}}></Image>
      </Content>
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    completeProfileRes: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeProfileRequest: body => {
      dispatch(completeProfileA(body));
    },
    defaultRequest: () => {
      dispatch(defaultA());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(completeProfile);
