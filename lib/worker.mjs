import { fromMarkdown } from "mdast-util-from-markdown";
import { runAsWorker } from "synckit";

runAsWorker(fromMarkdown);
