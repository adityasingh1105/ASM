import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import * as IMG_CONST from "./assets";
import styles from "./HrPoliciesStyle";

export default class HrPolicies extends Component {
    renderTopBar = () => {
        return (
            <View style={styles.topBarMainView}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                    <Image source={IMG_CONST.BackImg} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>HR Policies</Text>
            </View>
        );
    };
    renderContent = () => {
        return (
            <View>
                <View style={styles.innerView}>
                    <TouchableOpacity style={styles.singleMainView}>
                        <View style={styles.imgView}>
                            <Image source={IMG_CONST.ReferralPolicyImg} style={styles.ReferralPolicyImg} />
                        </View>
                        <View style={styles.bottomTxtView}>
                            <Text style={styles.bottomTxt}>Referral Policy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleMainView}>
                        <View style={styles.imgView}>
                            <Image source={IMG_CONST.LeavePolicy} style={styles.ReferralPolicyImg} />
                        </View>
                        <View style={styles.bottomTxtView}>
                            <Text style={styles.bottomTxt}>Leave Policy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerView}>
                    <TouchableOpacity style={styles.singleMainView}>
                        <View style={styles.imgView}>
                            <Image source={IMG_CONST.GeneralHrPolicy} style={styles.ReferralPolicyImg} />
                        </View>
                        <View style={styles.bottomTxtView}>
                            <Text style={styles.bottomTxt}>General Hr Policy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleMainView}>
                        <View style={styles.imgView}>
                            <Image source={IMG_CONST.RewardsRecognition} style={styles.ReferralPolicyImg} />
                        </View>
                        <View style={styles.bottomTxtView}>
                            <Text style={styles.bottomTxt}>Rewards & Recognition Policy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderTopBar()}
                {this.renderContent()}
            </SafeAreaView>
        )
    }
} 