import "./App.css";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:00PM"
        content="Completed task"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 5:00PM"
        content="Conference call"
      />
    </div>
  );
}

export default App;
