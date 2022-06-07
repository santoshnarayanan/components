import "./App.css";
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:00PM"
        content="Completed task"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 5:00PM"
        content="Conference call"
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
