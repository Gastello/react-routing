import { Form } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-2xl py-2">Login</div>
        <Form
          method="post"
          action="/auth"
          className="flex flex-col gap-2 max-w-3xs"
        >
          <input
            name="userName"
            type="text"
            placeholder="username"
            className="p-1 border"
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="p-1 border"
          />
          <button className="p-1 bg-gray-300 cursor-pointer">Submit</button>
        </Form>
      </div>
    </>
  );
}
