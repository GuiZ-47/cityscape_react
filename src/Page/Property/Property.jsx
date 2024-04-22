import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const Property = () => {  
  return (
        <View style={{ backgroundColor: '#F0F0F0', paddingVertical: 120 }}>
            <View style={{ paddingHorizontal: 20 }}>
                <View>
                    <View>
                        <Text>Status</Text>
                        <TextInput
                            style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1, paddingLeft: 40 }}
                            placeholder="Status"
                        />
                        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ position: 'absolute', left: 10, top: 10 }} />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Type</Text>
                        <TextInput
                            style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1, paddingLeft: 40 }}
                            placeholder="Type"
                        />
                        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ position: 'absolute', left: 10, top: 10 }} />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Location</Text>
                        <TextInput
                            style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1, paddingLeft: 40 }}
                            placeholder="Location"
                        />
                        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ position: 'absolute', left: 10, top: 10 }} />
                    </View>
                </View>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1, paddingLeft: 40 }}
                        placeholder="Advanced Filter"
                    />
                    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ position: 'absolute', left: 10, top: 10 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: '#333' }}>Showing 1-10 of 23</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                        <TouchableOpacity style={{ marginRight: 10 }}><Text>Grid</Text></TouchableOpacity>
                        <TouchableOpacity><Text>List</Text></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#333' }}>Sort by:</Text>
                        <TextInput
                            style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
                            placeholder="Sort by"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Property;
