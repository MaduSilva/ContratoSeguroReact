import React from 'react';

const ChatNode = () => {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Chat da ContratoSeguro</title>
        <div className="chat-container">
          <header className="chat-header">
            <h1><i><img classname="brqimg" src="https://www.brq.com/images/logo-brq.png" alt="imagem logo brq" /></i> ChatContratoSeguro</h1>
            <a href="index.html" className="btn">Sair da Sala</a>
          </header>
          <main className="chat-main">
            <div className="chat-sidebar">
              <h3><i className="fas fa-comments" /> Nome da Sala:</h3>
              <h2 id="room-name" />
              <h3><i className="fas fa-users" /> Usuários</h3>
              <ul id="users" />
            </div>
            <div className="chat-messages" />
          </main>
          <div className="chat-form-container">
            <form id="chat-form">
              <input id="msg" type="text" placeholder="Digite uma mensagem" required autoComplete="off" />
              <button className="btn"><i className="fas fa-paper-plane" /> Enviar</button>
            </form>
          </div>
        </div>
      </div>

    )
}

export default ChatNode
