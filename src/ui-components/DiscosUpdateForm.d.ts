/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Discos } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscosUpdateFormInputValues = {
    title?: string;
    band?: string;
    year?: number;
};
export declare type DiscosUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    band?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscosUpdateFormOverridesProps = {
    DiscosUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    band?: FormProps<TextFieldProps>;
    year?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiscosUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiscosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    discos?: Discos;
    onSubmit?: (fields: DiscosUpdateFormInputValues) => DiscosUpdateFormInputValues;
    onSuccess?: (fields: DiscosUpdateFormInputValues) => void;
    onError?: (fields: DiscosUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DiscosUpdateFormInputValues) => DiscosUpdateFormInputValues;
    onValidate?: DiscosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiscosUpdateForm(props: DiscosUpdateFormProps): React.ReactElement;
