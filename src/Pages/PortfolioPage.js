import React from 'react'
import Title from '../Components/Tittle'
import allBlogs from '../Components/allBlogs'
function PortfolioPage() {
    return (
        <div>
            <div className="b-title">
                <Title  tittle={'portafolio'} span={'Portafolio'}/>       
            </div>
            <div className="BlogPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className="blog-link">
                                    {blog.title} 
                                </a>
                                <div className="date.content">

                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default PortfolioPage