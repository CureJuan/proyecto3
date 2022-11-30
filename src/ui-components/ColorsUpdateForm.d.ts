/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Colors } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ColorsUpdateFormInputValues = {
    color?: number;
    textcolor?: number;
};
export declare type ColorsUpdateFormValidationValues = {
    color?: ValidationFunction<number>;
    textcolor?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColorsUpdateFormOverridesProps = {
    ColorsUpdateFormGrid?: FormProps<GridProps>;
    color?: FormProps<TextFieldProps>;
    textcolor?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ColorsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ColorsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    colors?: Colors;
    onSubmit?: (fields: ColorsUpdateFormInputValues) => ColorsUpdateFormInputValues;
    onSuccess?: (fields: ColorsUpdateFormInputValues) => void;
    onError?: (fields: ColorsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ColorsUpdateFormInputValues) => ColorsUpdateFormInputValues;
    onValidate?: ColorsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ColorsUpdateForm(props: ColorsUpdateFormProps): React.ReactElement;
