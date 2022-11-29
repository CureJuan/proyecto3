/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscosCreateFormInputValues = {
    title?: string;
    band?: string;
    year?: number;
    color?: number;
    textcolor?: number;
};
export declare type DiscosCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    band?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    color?: ValidationFunction<number>;
    textcolor?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscosCreateFormOverridesProps = {
    DiscosCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    band?: FormProps<TextFieldProps>;
    year?: FormProps<TextFieldProps>;
    color?: FormProps<TextFieldProps>;
    textcolor?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiscosCreateFormProps = React.PropsWithChildren<{
    overrides?: DiscosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiscosCreateFormInputValues) => DiscosCreateFormInputValues;
    onSuccess?: (fields: DiscosCreateFormInputValues) => void;
    onError?: (fields: DiscosCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DiscosCreateFormInputValues) => DiscosCreateFormInputValues;
    onValidate?: DiscosCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiscosCreateForm(props: DiscosCreateFormProps): React.ReactElement;
