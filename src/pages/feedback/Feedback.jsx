import './Feedback.css'

const users = [
    {
        image: 'user1.png',
        username: 'Olivia Holmes',
        content:'Justo vestibulum risus imperdiet consectetur consectetur pretium urna nibh augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla viverra.'
    },
    {
        image: 'user2.png',
        username: 'Maria Anna',
        content:'Ullamcorper enim at amet eget faucibus morbi ornare feugiat posuere blandit donec sit quis lectus eget faucibus scelerisque cras duis.'
    },
    {
        image: 'user3.png',
        username: 'Roberto Lopez',
        content:'Semper duis tellus orci nulla nibh elementum purus, pretium facilisi vel eget amet, sit diam lacinia tempus tristique euismod viverra fusce risus euismod amet.'
    },
    {
        image: 'user4.png',
        username: 'Julia Moore',
        content:'Vitae erat pretium, interdum et, massa, nunc rutrum at lectus lectus aenean etiam nulla nibh ipsum commodo eu nibh scelerisque pharetra, sem netus risus.'
    },
]

const Feedback = () => {
    return (
        <section className="feedback">
            <div className="students container">
                <h1 className="main-title">What our students say about the courses</h1>
                <section className="students-container">
                    {users.map((item, index) => {
                        return <div key={index} className="student-card">
                            <div className="col1">
                                <img className="student-img" src={item.image} alt={`${item.username} Profile page`} />
                            </div>
                            <div className="col2">
                                <p className="student-pargraph">“{item.content}”</p>
                                <h6 className="student-username">{item.username}</h6>
                            </div>
                        </div>
                    })}
                </section> 
            </div>
        </section>
    )
}

export default Feedback
