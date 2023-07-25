# Project Plan

Pod Members: **Gustavo Grijalba, Gerardo Perez, Jessica Flores Olmos**

## Problem Statement and Description

There's a lack of hearing health awareness which leads to hearing damage due to headphones and being exposed to loud environments. Our application is meant to have two core features: an audio listener that listens to the user's environment through their microphone and returns the average amt of decibels listened to throughout the listening session. The other feature is an interactive forum where users can post lifestyle or medical related posts.

## User Roles and Personas

Name: John Kaneer
Age: 37
Location: Paris, TX
Occupation: Construction Worker
Income: 85k
Status: Single

Personality Traits:
Loves watching american football
He is prone to believing stereotypes

Name: Guy John
Age: 15
Location: New York City, NY
Hobby: avid concert goer
Income: Dependent
Status: Single

Personality traits:
Concerned about his health
Listens to music non-stop
Tech-savy

USER ROLES:
Anonymous/Unregistered
Registered Users
Audiologists

## User Stories

1. As a registered user I want to be able to keep track of the forum posts and questions I make so that I can be updated on when they receive an answer.

2. As a non-registered user I want to still be able to browse the forum and current posts so that I would not have to create an account to receive help through previously answered questions.

3. As a person with a hearing related medical conditon, I want to be able to interact on other posts made by other users that also have the same medical condition so that I can better adjust with my situation based on other people’s experiences.

4. As a registered user I want to have the option to create anonymous posts so that I do not have to worry about giving identifying information to other users within the forum.

5. As someone with mild hearing loss I want to be able to respond to other posts within the forum so that I can be able to support them through their hardships.

6. As an audiologist I want to be able to create a user profile consisting of my medical information so that other users are more trusting of my advice.

7. As a browser of the forum, I want to be able to filter and search through previously asked questions so that I can easily find a question that may pertain or relate to my query.

8. As a user, I want to be shown relevant posts within the forum so that I would not have to ask a question that is already there.

9. As an audiologist, I want to be able to see the personal information of users so that I can better assess their needs and give personalized advice.

10. As a registered user, I want to be able to toggle privacy settings pertaining to personal information given during the registered survey so that I am more comfortable with who can access my information.

11. As a concert enthusiast, I want to ensure that my listening habits are not impacting my health by being able to track the loudness of my environment in decibels and get live feedback on its impact on my hearing health using the website’s microphone listening tool, so that I can safely go to concerts in the future.

### User Types

- Registered: 1, 3, 4, 5, 7, 8, 9, 10, 11
- Unregistered: 2, 7
- Audiologists: 6, 9

### Features based on user stories

- User updated based on responses to posts (notifications): 1
  - [ ] Notifications
- Universal Access: 2
  - [ ] Universal Access to Forum
- Reply/comment relationships in posts: 3, 5
  - [ ] Reply Comment Relationship
- Anonymous posts for registered users: 4
  - [ ] Regitered users able to post anonymously
- Informative Doctor profiles: 6
  - [ ] Extensive Doctor Profiles
- Filters for the forum posts: 7
  - [ ] Filter Capabilities in Forum
- Similar Questions are shown before posting a question: 8
  - [ ] Redirecting to relevnat posts before posting
- Doctor access to personal information: 9
  - [ ] Doctor View
- Limiting information acces based on user preferences: 10
  - [ ] Privacy Settings for users
- Tracking user environment sound: 11
  - [ ] Sound Analysis

## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.

- Register page for both general users and audiologists
- Login page
- Create a post page (popup within the Forum page)
- Individual Forum post page

### Front End Routes:

| Address            | Description           | User Stories | ComponentName          |
| ------------------ | --------------------- | ------------ | ---------------------- |
| '/'                | Landing Page          |              | Home                   |
| '/forum'           | Forum Page            | 2,3,4,5,7, 8 | ForumView              |
| '/login'           | Login Page            |              | LoginPage              |
| '/register'        | Registration          |              | RegistartionPage       |
| '/register/doctor' | Registration          | 6            | DoctorRegistrationPage |
| '/forum/:id'       | Forum Page child post | 5            | ForumPost              |
| '/listener'        | Listening Page        | 11           | Listener               |
| '/inbox'           | Notification Page     | 1            |                        |

### Additional Components:

| Component Name         | Direct Children Components                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| App                    | Home, Footer, Navbar, ForumView,LoginPage, RegistrationPage, DoctorRegistrationPage, Listener |
| Home                   | Hero                                                                                          |
| Footer                 |                                                                                               |
| Navbar                 | NavLinks                                                                                      |
| NavLiks                |                                                                                               |
| ForumView              | ForumPost                                                                                     |
| LoginPage              |                                                                                               |
| RegistrationPage       |                                                                                               |
| DoctorRegistrationPage |                                                                                               |
| Listener               |                                                                                               |
| ForumPost              | PostComment                                                                                   |
| PostComment            |                                                                                               |

**WIREFRAME**

{https://www.figma.com/file/YxhmoHBKcaxdPWMgIBSjY4/EARIE?type=design&node-id=38%3A10&mode=design&t=VuayNRkVbwqVMDlk-1}

## Data Model

Describe your app's data model using diagrams or tables

### Data Tables:

#### Users

| Column Name | Type                  | Description                                 |
| ----------- | --------------------- | ------------------------------------------- |
| user_id     | SERIAL PRIMARY KEY    | a user's unique key                         |
| username    | TEXT                  | a user's unique id                          |
| created_at  | TIMESTAMP NOT NULL    | creation date for the account               |
| email       | TEXT                  | unique email for user                       |
| password    | TEXT                  | the password the user will use to login     |
| first_name  | TEXT                  | the user’s first name                       |
| last_name   | TEXT                  | the users last name                         |
| description | TEXT                  | the users description                       |
| conditions  | TEXT []               | the users conditions                        |
| is_doctor   | BOOLEAN DEFAULT FALSE | a boolean that states if a user is a doctor |

#### Doctors

| Column Name        | Type                  | Description                                        |
| ------------------ | --------------------- | -------------------------------------------------- |
| doctor_id          | SERIAL PRIMARY KEY    | the id of the doctor                               |
| user_id            | INTEGER               | the id of the doctor in the users table            |
| specialties        | TEXT []               | an array of all of the docto's specialties         |
| registrtion_number | TEXT                  | the doctors registartion number (credentials)      |
| description        | TEXT                  | persobnal description the doctor makes             |
| verified           | BOOLEAN DEFAULT FALSE | boolean that indicates if a user has been verified |

#### Forum Post

| Column Name  | Type                             | Description                                              |
| ------------ | -------------------------------- | -------------------------------------------------------- |
| post_id      | SERIAL PRIMARY KEY               | the id of the post                                       |
| username     | TEXT                             | the username of the person making the post               |
| user_id      | INTEGER                          | the id of the doctor in the users table                  |
| content      | TEXT                             | the text content of the forum post                       |
| title        | TEXT                             | the title of the forum post                              |
| category     | TEXT                             | type of forum post (lifestyle or medical)                |
| is_anonymous | BOOLEAN DEFAULT FALSE            | whether or not this post was chosen to be Anonymous      |
| from_doctor  | BOOLEAN DEFAULT FALSE NOT NULL   | boolean that determines if the post was made by a doctor |
| created_at   | TIMESTAMP NOT NULL DEFAULT NOW() | when the post was created                                |

#### Comments

| Column Name | Type                             | Description                                              |
| ----------- | -------------------------------- | -------------------------------------------------------- |
| comment_id  | SERIAL PRIMARY KEY               | the id of the comment                                    |
| post_id     | INTEGER                          | the id of the post                                       |
| user_id     | INTEGER                          | the id of the doctor in the users table                  |
| username    | TEXT                             | the username of the person making the comment            |
| content     | TEXT                             | the text content of the forum post                       |
| from_doctor | BOOLEAN DEFAULT FALSE NOT NULL   | boolean that determines if the post was made by a doctor |
| created_at  | TIMESTAMP NOT NULL DEFAULT NOW() | when the post was created                                |

#### Notifications

| Column Name     | Type                             | Description                                                 |
| --------------- | -------------------------------- | ----------------------------------------------------------- |
| notification_id | SERIAL PRIMARY KEY               | the id of the notification                                  |
| user_id         | INT NOT NULL                     | the id of the person getting notified                       |
| post_id         | INT NOT NULL                     | the id of the post the notification is linked to            |
| comment_id      | INT NOT NULL                     | the id of the comment the user is being notified about      |
| message         | TEXT NOT NULL                    | the message that the notification is going to give the user |
| view_status     | BOOLEAN DEFAULT FALSE NOT NULL   | the viewed status of the notification                       |
| created_at      | TIMESTAMP NOT NULL DEFAULT NOW() | when the notification was created                           |

## Endpoints

List the API endpoints you will need to implement.

/ (frontend)
/register (frontend/backend)
/doctor/register (frontend/backend)
/login (frontend/backend)
/listener (frontend/backend)
/forum (frontend/backend)
/forum/post/:postId (frontend/backend)
/forum/post/comments (backend)

### Back End Routes:

| CRUD | HTTP Verb | Description                          | User Stories |
| ---- | --------- | ------------------------------------ | ------------ |
| C    | POST      | REGISTER USER                        | 1            |
| C    | POST      | REGISTER DOCTOR                      | 9            |
| C    | POST      | LOGIN USER                           | 5            |
| R    | GET       | GET ALL FORUM POSTS FROM FORUM       | 7            |
| R    | GET       | GET ALL COMMENTS FROM FORUM POST     | 8            |
| C    | POST      | POST A USERS POST TO THE POSTS TABLE |              |
| C    | POST      | POST A COMMENT TO THE COMMENTS TABLE |              |

**_Don't forget to set up your Issues, Milestones, and Project Board!_**
