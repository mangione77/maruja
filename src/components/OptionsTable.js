import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import buildProfileUrls from '../utils/profileLinks'
import buildLikedUrls from '../utils/likedLinks'
import buildTagsUrls from '../utils/tagsLinks'
import buildCommentsUrls from '../utils/commentsLinks'
import buildPeopleLinks from '../utils/peopleLinks'
import GenericTable from '../common/GenericTable'


class OptionsTable extends Component {
    render() {
            if (this.props.profileId) {
                var profileUrls = buildProfileUrls(this.props.profileId)
                var likedUrls = buildLikedUrls(this.props.profileId)
                var taggedUrls = buildTagsUrls(this.props.profileId)
                var commentsUrls = buildCommentsUrls(this.props.profileId)
                var peopleUrls = buildPeopleLinks(this.props.profileId)
            }

        return <Grid>  
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <GenericTable 
                            Urls={likedUrls}
                            headerTitle={'Likes'}
                            headerIcon={'👍'}
                        />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <GenericTable
                            Urls={profileUrls}
                            headerTitle={'Perfil'}
                            headerIcon={'🕵'}
                        />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                    <GenericTable 
                        Urls={taggedUrls}
                        headerTitle={'Tags'}
                        headerIcon={'🔖'} 
                    />
                </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <GenericTable 
                            Urls={peopleUrls}
                            headerTitle={'Conocidos'}
                            headerIcon={'👩‍👩‍👧‍👦'} 
                        />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <GenericTable 
                            Urls={commentsUrls}
                            headerTitle={'Comentarios'}
                            headerIcon={'🙋'} 
                        />
                    </Col>
                </Row>
            </Grid>
    }
}

export default OptionsTable