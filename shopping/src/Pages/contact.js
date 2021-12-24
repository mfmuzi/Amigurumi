import { Button, Grid, TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';

const Contacts = () => {

    const [message, setMessage] = useState([]);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState('');
    const url = 'http://localhost:5000/message';
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json();
            setMessage(data);
        } fetchData();
    }, [render])

    const sendMessage = () => {
        setValidator(false);
        if (name.length <= 0 || author.length <= 0 || content.length <= 0) {
            return setValidator(!validator)
        }
        const bodyForm = {
            name: name,
            email: author,
            message: content,
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.id) {
                    setRender(true);
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false)
                    }, 1500)
                }
            })
        setName('');
        setAuthor('');
        setContent('');
    }

    return (
        <>
            <Grid container diretion="row" justifyContent="center" alignItems="flex-start" spacing={3}>
                <h4 style={{ textAlign: "center", margin: "70px", width: "50%" }}> Se você quer saber mais sobre esse mundo maravilhoso dos Amigurumis, deixe sua mensagem!</h4>

            </Grid><Grid container diretion="row" justifyContent="space-evenly" alignItems="center" item xs={12}><Grid>
            </Grid><Grid item xs={6}>
                    <Grid container direction="row">
                        <TextField id="name" label="Nome" value={name} onChange={(event) => { setName(event.target.value); }} fullWidth />
                        <TextField id="email" label="E-mail" value={author} onChange={(event) => { setAuthor(event.target.value); }} fullWidth />
                        <TextField id="message" label="Mensagem" value={content} onChange={(event) => { setContent(event.target.value); }} fullWidth />
                    </Grid>
                    {validator &&
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Por favor, preencha todos os campos!</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
                        </div>}

                    {success &&
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Mensagem enviada!</strong>
                        </div>}
                    <Button className="mt-2" variant="contained" color="primary" onClick={sendMessage} style={{ marginBottom: "20px" }}>
                        Enviar
                    </Button>
                    {message.map((content) => {
                        return (
                            <div className="card mt-2" key={content.id}>
                                <div className="card-body" >
                                    <h5 className="card-title">{content.name} <small className="text-muted" style={{fontSize:"16px"}}>({content.email})</small></h5>                                    
                                    <p className="card-text" style={{marginTop:"20px"}}>{content.message}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{(content.created_at).substr(0, 10).split('-').reverse().join('/')}</small>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Grid><Grid>
                </Grid></Grid>
        </>
    )
}

export default Contacts;