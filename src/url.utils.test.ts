import { createUrlObject, IUrlObject } from "./url.utils";

test("Create url object from string", () => {
  const urlObject: IUrlObject = createUrlObject(
    "http://example.com/?b=20&a=go"
  );
  expect(urlObject).toEqual({
    hash: "",
    pathname: "/",
    protocol: "http:",
    port: "",
    host: "example.com",
    query: { a: "go", b: "20" },
  });
});
