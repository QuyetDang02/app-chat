import React from 'react';
import '../../App.css';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// const backgrould = styled.div`
//   background-image: url("https://i.stack.imgur.com/Of2w5.jpg");
//   background-color: #cccccc;
// `;

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div className='backgrould'>
      <div className='content'>
      <Row justify='center' style={{ height: 580 }}>
        <Col span={8}>
          <br/>
          <br/>
          <br/>
          <Title style={{ textAlign: 'center' }} level={2}>
           Login Fun Chat
          </Title>
          <Button
            style={{ width: '100%', marginBottom: 5 }}
            onClick={() => handleLogin(googleProvider)}
          >
            Đăng nhập bằng Google
          </Button>
          <Button
            style={{ width: '100%' ,border_radius:25 }}
            onClick={() => handleLogin(fbProvider)}
          >
            Đăng nhập bằng Facebook
          </Button>
          
        </Col>
      </Row>
      </div>
    </div>
  );
}