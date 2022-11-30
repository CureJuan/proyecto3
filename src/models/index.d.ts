import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerColors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Colors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly color?: number | null;
  readonly textcolor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyColors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Colors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly color?: number | null;
  readonly textcolor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Colors = LazyLoading extends LazyLoadingDisabled ? EagerColors : LazyColors

export declare const Colors: (new (init: ModelInit<Colors>) => Colors) & {
  copyOf(source: Colors, mutator: (draft: MutableModel<Colors>) => MutableModel<Colors> | void): Colors;
}