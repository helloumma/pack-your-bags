import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Input from "./input";

describe("<Input />", () => {
  it("screen matches rendered snapshot", () => {
    const { container } = render(
      <Input
        bag={"test bag"}
        item={"test item"}
        onBagChange={() => null}
        onItemChange={() => null}
        onSubmit={() => null}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
