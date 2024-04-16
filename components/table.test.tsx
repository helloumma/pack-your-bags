import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Table from "./table";

describe("<Table />", () => {
  it("screen matches rendered snapshot", () => {
    const { container } = render(
      <Table
        data={[
          {
            bag: "backpack",
            item: "test",
            packed: false,
          },
          {
            bag: "toiletries",
            item: "test",
            packed: false,
          },
          {
            bag: "suitcase",
            item: "test",
            packed: false,
          },
        ]}
        onCheckboxChange={() => null}
        removeRow={() => null}
        onBagChange={() => null}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
