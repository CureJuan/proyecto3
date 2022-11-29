/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Discos } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function DiscosUpdateForm(props) {
  const {
    id,
    discos,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    band: undefined,
    year: undefined,
    color: undefined,
    textcolor: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [band, setBand] = React.useState(initialValues.band);
  const [year, setYear] = React.useState(initialValues.year);
  const [color, setColor] = React.useState(initialValues.color);
  const [textcolor, setTextcolor] = React.useState(initialValues.textcolor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...discosRecord };
    setTitle(cleanValues.title);
    setBand(cleanValues.band);
    setYear(cleanValues.year);
    setColor(cleanValues.color);
    setTextcolor(cleanValues.textcolor);
    setErrors({});
  };
  const [discosRecord, setDiscosRecord] = React.useState(discos);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Discos, id) : discos;
      setDiscosRecord(record);
    };
    queryData();
  }, [id, discos]);
  React.useEffect(resetStateValues, [discosRecord]);
  const validations = {
    title: [{ type: "Required" }],
    band: [{ type: "Required" }],
    year: [{ type: "Required" }],
    color: [],
    textcolor: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          band,
          year,
          color,
          textcolor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Discos.copyOf(discosRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "DiscosUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              band,
              year,
              color,
              textcolor,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Band"
        isRequired={true}
        isReadOnly={false}
        defaultValue={band}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              band: value,
              year,
              color,
              textcolor,
            };
            const result = onChange(modelFields);
            value = result?.band ?? value;
          }
          if (errors.band?.hasError) {
            runValidationTasks("band", value);
          }
          setBand(value);
        }}
        onBlur={() => runValidationTasks("band", band)}
        errorMessage={errors.band?.errorMessage}
        hasError={errors.band?.hasError}
        {...getOverrideProps(overrides, "band")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={year}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              year: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              band,
              year: value,
              color,
              textcolor,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={color}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              color: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              band,
              year,
              color: value,
              textcolor,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <TextField
        label="Textcolor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={textcolor}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              textcolor: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              band,
              year,
              color,
              textcolor: value,
            };
            const result = onChange(modelFields);
            value = result?.textcolor ?? value;
          }
          if (errors.textcolor?.hasError) {
            runValidationTasks("textcolor", value);
          }
          setTextcolor(value);
        }}
        onBlur={() => runValidationTasks("textcolor", textcolor)}
        errorMessage={errors.textcolor?.errorMessage}
        hasError={errors.textcolor?.hasError}
        {...getOverrideProps(overrides, "textcolor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
