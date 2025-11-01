import { Form, Button, Select } from "antd";
import ThemeToggle from "@components/ThemeToggle";
import { useEffect } from "react";
import { useSettings } from "@contexts/SettingsContext";
import { FormItems, StyledForm } from "./Settings.styles";

const { Option } = Select;

function Settings() {
  const [form] = Form.useForm();
  const { settings, setSettings } = useSettings();

  useEffect(() => {
    form.setFieldsValue({
      theme: settings.theme === "dark",
      language: settings.language,
    });
  }, [form, settings]);

  const handleSubmit = (values: any) => {
    setSettings({
      theme: values.theme ? "dark" : "light",
      language: values.language,
    });
  };

  return (
    <StyledForm
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: 400 }}
    >
      <FormItems>
        <Form.Item name="theme" label="Theme" valuePropName="checked">
          <ThemeToggle />
        </Form.Item>

        <Form.Item name="language" label="Language">
          <Select>
            <Option value="en">English</Option>
            <Option value="fr">French</Option>
            <Option value="es">Spanish</Option>
          </Select>
        </Form.Item>
      </FormItems>

      <Button type="default" htmlType="submit">
        Save Settings
      </Button>
    </StyledForm>
  );
}

export default Settings;
