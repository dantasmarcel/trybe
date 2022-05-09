import React from "react";

class Header extends React.Component {

    showMessage() {
        const message = "Olá Turma";
        return message;
    }

    render() {

        const turma = 20;

        return (
            <header>{this.showMessage()} {turma} - A </header>
        )
    }
}
export default Header;