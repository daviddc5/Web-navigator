# Web Navigator: A Codecademy Project

## Introduction

The **Web Navigator** project is inspired by the core navigational operations of a web browser. Leveraging the concept of data stacks, this simulation offers operations such as:
- Opening a new web page
- Navigating to the previous page
- Advancing to the next page

## Key Features

### Stack-Based Navigation

The project uses the Stack class to emulate a browser's history mechanism. Specifically:
- **`backPages` Stack**: Maintains a record of previously visited pages
- **`nextPages` Stack**: Keeps track of the pages that can be navigated forward to

### Navigational Operations

- **Opening a New Page**: When a user visits a new page, the previous page is pushed onto the `backPages` stack. If they navigate to a new page from an older one, the `nextPages` stack is cleared to maintain consistency
- **Navigating Backward**: Allows the user to go back to the previous page. The current page will be pushed onto the `nextPages` stack
- **Navigating Forward**: Users can advance to the subsequent page if they've navigated backward before

### User Interactions

The application provides an interactive experience, allowing users to:
- Enter a URL of a new page they want to visit
- Choose to navigate either backward or forward
- Exit the program

## Conditional Navigation

The availability of forward and backward navigation options is conditional. For instance, the backward navigation feature is only accessible if there are pages stored in the `backPages` stack

## Display Feedback

After each operation, the application provides feedback by displaying:
- The URL of the current page
- The top elements from both the `backPages` and `nextPages` stacks, giving a peek into the navigation history


