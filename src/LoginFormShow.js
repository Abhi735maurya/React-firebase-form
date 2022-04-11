function LoginFormShow({data}) {
    //console.log(data);
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    {
                        data.map((value) => {
                            return (
                                <div className="col-4">
                                    <h6>Email : {value.email}</h6>
                                    <h6>Password :{value.password}</h6>
                                    <h6>City :{value.city}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default LoginFormShow;