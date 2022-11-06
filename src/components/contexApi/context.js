const signInUser = (loginData) => {
    console.log(loginData);
    axios
      .post("https://contact-manager-server.herokuapp.com/login", loginData)
      .then((res) => {
        const myToken = res.data.token;
        console.log(myToken);
        localStorage.setItem("token", myToken);
        localStorage.setItem("email", loginData.email);
        navigate("/contacts");
        // fetchContacts();
        document.location.reload();
        setEmail(loginData.email);
      })
      .catch((err) => {
        window.alert(err.response.data.message)
        console.log(err)
      });
  };

  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };

  const postContacts = async (ContactsData) => {

    return await axios
      .post("https://contact-manager-server.herokuapp.com/add", ContactsData, config)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err.response.data.message)
        // console.log(err)
      })

  };