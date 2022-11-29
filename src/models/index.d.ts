import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDiscos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Discos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly band: string;
  readonly year: number;
  readonly color?: number | null;
  readonly textcolor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Discos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly band: string;
  readonly year: number;
  readonly color?: number | null;
  readonly textcolor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Discos = LazyLoading extends LazyLoadingDisabled ? EagerDiscos : LazyDiscos

export declare const Discos: (new (init: ModelInit<Discos>) => Discos) & {
  copyOf(source: Discos, mutator: (draft: MutableModel<Discos>) => MutableModel<Discos> | void): Discos;
}