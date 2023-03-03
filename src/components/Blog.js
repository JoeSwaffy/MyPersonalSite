import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/Container'
import Container from 'react-bootstrap/Container'
import './Blog.css'

let BlogArea = () => {
    return(
        <>
            <Container bg="dark" variant="dark">
                <div className="blog">
                    <center><h3>Recent Posts: </h3></center>
                </div>

            </Container>
        </>
    )
}

export default BlogArea;