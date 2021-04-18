import React, { Component } from "react";
import "./Home.css";
import Banner from "components/banner/Banner";
import BlogList from "components/blogList/BlogList";
import Modal from 'components/modal/Modal';
import actions from 'store/actions';
import { connect } from 'react-redux';

class Home extends Component {
  state = {};

  handleSave = (formData)=>{
    const {addBlog} = this.props;
    addBlog(formData);
  }

  render() {
    const {toggleAdd, addModal} = this.props;

    return (
      <div className="home-wrapper">
          <div className="home-content">
          {addModal && <Modal toggleAdd={toggleAdd} handleSave={this.handleSave}/>}

          <Banner />
          <BlogList /> 
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addBlog: actions.addBlog,
};

export default connect(null, mapDispatchToProps)(Home);
