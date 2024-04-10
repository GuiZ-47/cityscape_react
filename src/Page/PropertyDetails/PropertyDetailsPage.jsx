import React from 'react';
import {Text,ScrollView,} from 'react-native';


import PicturePropertyDetails from "./../../Component/PropertyDetails/PicturePropertyDetailsComponent"
import Breadcrumb from "./../../Component/PropertyDetails/BreadcrumbComponent"
import PreviewPropertyDetails from "./../../Component/PropertyDetails/PreviewPropertyDetails"
import FeaturesPropertyDetails from "./../../Component/PropertyDetails/FeaturesPropertyDetailsComponent"
import AddressPropertyDetails from "./../../Component/PropertyDetails/AddressPropertyDetailsComponent"
import VideoPropertyDetails from "./../../Component/PropertyDetails/VideoPropertyDetailsComponent"
import CategoryPropertyDetails from "./../../Component/PropertyDetails/CategoryPropertyDetailsComponent"
import RecentPostPropertyDetails from "./../../Component/PropertyDetails/RecentPostPropertyDetailsComponent"
import OtherPropertiesPropertyDetails from "./../../Component/PropertyDetails/OtherPropertiesPropertyDetailsComponent"
import SubscribeToNewsletter from "./../../Component/Newsletter/SubscribeToNewsletterComponent"
import MobileMenu from "./../../Component/Header/HeaderComponent"

export default function PropertyDetails() {
  return (
  <ScrollView>
    < MobileMenu />
    < Breadcrumb />
    < PicturePropertyDetails />
    < PreviewPropertyDetails />
    < FeaturesPropertyDetails />
    < AddressPropertyDetails />
    < VideoPropertyDetails />
    < CategoryPropertyDetails />
    < RecentPostPropertyDetails />
    < OtherPropertiesPropertyDetails />
    < SubscribeToNewsletter />
  </ScrollView>

);
};
