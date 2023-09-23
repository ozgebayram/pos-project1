import React from "react";
import { Modal, Form, Input, Select, Button, Card, message } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: " , values);
  };

  return (
    <div>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        
      >
        <Form layout={"vertical"} onFinish={onFinish}>
          <Form.Item
            label="Customer Name"
            name={"customerName"}
            rules={[{ required: true, message: "This field cannot be empty" }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            rules={[{ required: true,  message: "This field cannot be empty" }]}
            name={"phoneNumber"}
          >
            <Input placeholder="Enter phone number" maxLength={11} />
          </Form.Item>
          <Form.Item
            label="Payment Method"
            rules={[{ required: true,  message: "Choose payment method" }]}
            name={"payMode"}
          >
            <Select placeholder="Select payment method">
              <Select.Option value="Cash"></Select.Option>
              <Select.Option value="Credit Cart"></Select.Option>
            </Select>
          </Form.Item>

          <Card className="">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>592.92₺</b>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-4 w"
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBill;
