import React, { Component } from 'react';
// import Chatbot from 'react-simple-chatbot';
import FloatButton from './components/FloatButton';
import ChatContainer from './components/ChatBotContainer';
import Header from './components/Header';
import HeaderTitle from './components/HeaderTitle';
import HeaderIcon from './components/HeaderIcon';
import { ChatIcon, CloseIcon } from './icons';
import logo from './logo.svg';
import './App.css';
import Title from './Title';

class App extends Component {

  toggleChatBot(opened) {
    if (this.props.toggleFloating) {
      this.props.toggleFloating({ opened });
    } else {
      this.setState({ opened });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </header>
        <FloatButton floating="true" onClick={() => this.toggleChatBot(true)}>
          <ChatIcon />
        </FloatButton>
        <ChatContainer floating="true">
          <Header className="rsc-header">
          <HeaderTitle className="rsc-header-title">Practice</HeaderTitle>
            <HeaderIcon className="rsc-header-close-button" onClick={() => this.toggleChatBot(false)}>
              <CloseIcon />
            </HeaderIcon>
        </Header>
        <Content
            className="rsc-content"
            innerRef={contentRef => (this.content = contentRef)}
            floating={floating}
            style={contentStyle}
          >
          </Content>
          <Footer className="rsc-footer" style={footerStyle}>
            <Input
              type="textarea"
              style={inputStyle}
              innerRef={inputRef => (this.input = inputRef)}
              className="rsc-input"
              placeholder={inputInvalid ? '' : inputPlaceholder}
              onKeyPress={this.handleKeyPress}
              onChange={this.onValueChange}
              value={inputValue}
              floating={floating}
              invalid={inputInvalid}
              disabled={disabled}
              hasButton={!hideSubmitButton}
            />
              <SubmitButton
                className="rsc-submit-button"
                style={submitButtonStyle}
                onClick={this.handleSubmitButton}
                invalid={inputInvalid}
                disabled={disabled}
                speaking={speaking}
              >
                {icon}
              </SubmitButton>
          </Footer>
        </ChatContainer>

        {/* <Chatbot steps={steps} floating="true"/> */}
      </div>

    );
  }
}

export default App;
