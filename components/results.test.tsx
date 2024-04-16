import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Results from "./results";

describe("<Results />", () => {
  it.skip("screen matches rendered snapshot", () => {
    const { container } = render(<Results />);
    expect(container).toMatchSnapshot();
  });
});
