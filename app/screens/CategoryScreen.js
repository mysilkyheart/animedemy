import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TextInput, FlatList, SectionList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Content, Drawer } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import GridList from 'react-native-grid-list';
import Star from 'react-native-star-view';
import SideMenu from '../components/SideMenu'
import { CATEGORY_ID } from '../actions/video'
import { connect } from 'react-redux'

class CategoryScreen extends Component {

    componentDidMount() {
        this.props.dispatch(CATEGORY_ID(this.props.navigation.getParam('id', 'nodata')))
    }

    category = (id) => {
        this.props.dispatch(CATEGORY_ID(id))
    }

    constructor(props) {
        super(props)
        this.state = {
            listAnime: [{
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            }],

        }
    }

    renderItem = ({ item, index }) => (
        <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('Movie', { id: item.id })} >
            <View style={{ width: 110, height: 200 }}>
                <Image source={{ uri: item.image_url }} style={{ width: 100, height: 140 }} />
                <View style={{ flexDirection: 'column', marginTop: 5 }}>
                    <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 12, color: 'white' }}>{item.age_restriction}</Text>
                    <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 14, color: 'white' }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Star score={item.imdb_score / 2} style={{ width: 60, height: 12, marginTop: 1 }} />
                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 10, color: 'white', marginLeft: 3 }}>{item.imdb_score}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    closeDrawer = () => {
        this.drawer._root.close()
    }

    openDrawer = () => {
        this.drawer._root.open()
    }

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideMenu {...this.props} />}
                onClose={() => this.closeDrawer()}
                type='displace' >
                <Container>
                    <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                        <Header style={{ backgroundColor: '#010101' }}>
                            <Left style={{ flex: 1, marginLeft: 5 }}>
                                <Icon name='md-menu' style={{ color: 'white' }} onPress={this.openDrawer} />
                            </Left>
                            <Body style={{ flex: 8, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                    Category
                            </Text>
                            </Body>
                            <Right style={{ flex: 1, marginRight: 5 }}>
                                <Icon name='md-search' style={{ color: 'white' }} />
                            </Right>
                        </Header>
                        <Header style={{ backgroundColor: '#010101', height: 30, justifyContent: 'center' }}>
                            <Body>
                                <View style={{ borderBottomColor: '#00C0C1', borderBottomWidth: 2, alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#00C0C1' }}>
                                        Action
                                </Text>
                                </View>
                            </Body>
                        </Header>
                        <Content style={{ marginTop: 10 }}>
                            {this.props.category.isLoading ? <ActivityIndicator /> :
                                <GridList
                                    data={this.props.category.resultsCategory}
                                    numColumns={3}
                                    renderItem={this.renderItem}
                                    columnWrapperStyle={{ marginBottom: 90, marginLeft: 14 }}
                                />
                            }
                        </Content>
                    </LinearGradient>
                </Container>
            </Drawer>
        )
    }
}

const mapStateToProps = state => ({
    category: state.categoryReducers
});

export default connect(mapStateToProps)(CategoryScreen)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    input: {
        borderRadius: 16,
        width: 300,
        height: 30,
        backgroundColor: 'white',
        padding: 7,
        marginRight: 20

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        color: '#00C0C1',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        backgroundColor: '#1A222E',
    },
    item: {
        padding: 10,
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        height: 44,
        color: 'white'
    }
})