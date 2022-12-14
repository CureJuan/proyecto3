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
export declare type ColorsCreateFormInputValues = {
    color?: number;
    textcolor?: number;
};
export declare type ColorsCreateFormValidationValues = {
    color?: ValidationFunction<number>;
    textcolor?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColorsCreateFormOverridesProps = {
    ColorsCreateFormGrid?: FormProps<GridProps>;
    color?: FormProps<TextFieldProps>;
    textcolor?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ColorsCreateFormProps = React.PropsWithChildren<{
    overrides?: ColorsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ColorsCreateFormInputValues) => ColorsCreateFormInputValues;
    onSuccess?: (fields: ColorsCreateFormInputValues) => void;
    onError?: (fields: ColorsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ColorsCreateFormInputValues) => ColorsCreateFormInputValues;
    onValidate?: ColorsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ColorsCreateForm(props: ColorsCreateFormProps): React.ReactElement;
