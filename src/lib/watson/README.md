### Table of Contents

-   [conversationSDK](#conversationsdk)
-   [Conversation](#conversation)
    -   [message](#message)
    -   [getWorkspace](#getworkspace)

## conversationSDK

Initialize Watson Conversation SDK.

## Conversation

Conversation class that holds all functions about Watson Conversation.
Add more functions that leverage the Watson Conversation SDK here.

### message

This synchronous function leverages the SDK to send a
message to Watson Conversation.
It returns a JSON object from Watson Conversation

**Parameters**

-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `context` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?**

Returns **any** Promise

### getWorkspace

This synchronous function leverages the Watson Conversation SDK
to obtain a JSON representation of your Watson Service.

Returns **any** Promise
