import type { Node } from "mdast";
import type { Linter } from "eslint";


export interface RangeMap {
    indent: number;
    js: number;
    md: number;
}

export interface BlockBase {
    baseIndentText: string;
    comments: string[];
    rangeMap: RangeMap[];
}

export interface Block extends Node, BlockBase {}

export type Message = Linter.LintMessage;

export type RuleType = "problem" | "suggestion" | "layout";
