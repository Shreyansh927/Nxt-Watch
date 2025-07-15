// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]

class BlogList extends Component {
  state = {}

  render() {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1>Wade Warren</h1>
        <p>Software developer at UK</p>
        <ul>
          {blogsList.map(eachDetail => (
            <BlogItem key={eachDetail.id} eachDetail={eachDetail} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogList
