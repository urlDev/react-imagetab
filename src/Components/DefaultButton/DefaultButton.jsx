 /*global chrome*/
// https://stackoverflow.com/questions/51411447/using-chrome-api-with-react-js
import React, { Component } from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import { ReactComponent as ChromeIcon } from './chrome.svg';

import "./DefaultButton.scss"

class DefaultButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <UserAgent chrome >
          <button
            appearance="subtle"
            onClick={() => {
              chrome.tabs.getCurrent(tab => {
                chrome.tabs.update(tab.id, {
                  url: 'chrome-search://local-ntp/local-ntp.html',
                });
              });
            }}
            iconBefore={
              <ChromeIcon height={20} width={20} fill="currentColor" />
            }
          >
            Chrome Tab
          </button>
        </UserAgent> 
        );
    }
}

export default DefaultButton;