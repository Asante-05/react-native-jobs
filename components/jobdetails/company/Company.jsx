import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "company Logo Unavailabe",
          }}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location}
            resizeMode="contain"
            style={styles.locationImage} />
        </View>
        <Text style={styles.jobTitleBox}>{location}</Text>
      </View>
    </View>
  );
};

export default Company;
