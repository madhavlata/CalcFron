import {
  UiNode,
  UiNodeAnchorAttributes,
  UiNodeAttributes,
  UiNodeImageAttributes,
  UiNodeInputAttributes,
  UiNodeTextAttributes,
} from "@ory/kratos-client";
// import { NodeImage } from './NodeImage'
// import { NodeText } from './NodeText'
import { NodeInput } from "./NodeInput";

interface Props {
  node: UiNode;
}

// A TypeScript type guard for nodes of the type <a>
export function isUiNodeAnchorAttributes(
  pet: UiNodeAttributes
): pet is UiNodeAnchorAttributes {
  return (pet as UiNodeAnchorAttributes).href !== undefined;
}

// A TypeScript type guard for nodes of the type <img>
export function isUiNodeImageAttributes(
  pet: UiNodeAttributes
): pet is UiNodeImageAttributes {
  return (pet as UiNodeImageAttributes).src !== undefined;
}

// A TypeScript type guard for nodes of the type <input>
export function isUiNodeInputAttributes(
  pet: UiNodeAttributes
): pet is UiNodeInputAttributes {
  return (pet as UiNodeInputAttributes).name !== undefined;
}

// A TypeScript type guard for nodes of the type <span>{text}</span>
export function isUiNodeTextAttributes(
  pet: UiNodeAttributes
): pet is UiNodeTextAttributes {
  return (pet as UiNodeTextAttributes).text !== undefined;
}

// Get a node's label
export const getLabel = (n: UiNode): string => {
  switch (n.type) {
    case "a":
      return (n.attributes as UiNodeAnchorAttributes).title.text;
    case "img":
      return n.meta.label?.text || "";
    case "input":
      const key = (n.attributes as UiNodeInputAttributes).name;
      if (n.meta?.label?.text) {
        return n.meta.label.text;
      }
      return key;
    case "text":
      return n.meta.label?.text || "";
  }
  return "";
};

export const Node = ({ node }: Props) => {
  // if (isUiNodeImageAttributes(node.attributes)) {
  //   return <NodeImage node={node} attributes={node.attributes} />
  // }

  // if (isUiNodeTextAttributes(node.attributes)) {
  //   return <NodeText node={node} attributes={node.attributes} />
  // }

  if (isUiNodeInputAttributes(node.attributes)) {
    return <NodeInput node={node} attributes={node.attributes} />;
  }

  return null;
};
