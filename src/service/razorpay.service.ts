import { Injectable } from '@nestjs/common';
import Razorpay from 'razorpay';
import { razorpayConfig } from '../config';

@Injectable()
export class RazorpayService {
  private razorpay: Razorpay;

//   constructor() {
//     this.razorpay = new Razorpay({
//       key_id: razorpayConfig.apiKey,
//       key_secret: razorpayConfig.apiSecret,
//     });
//   }


  async createOrder(amount: number, currency: string): Promise<any> {
    const options = {
      amount: amount * 100, // Amount in paise or the smallest currency unit
      currency,
      receipt: 'order_receipt', // Generate a unique order receipt ID
      payment_capture: 1, // Auto-capture payment
    };

    return new Promise((resolve, reject) => {
      this.razorpay.orders.create(options, (error, order) => {
        if (error) {
          reject(error);
        } else {
          resolve(order);
        }
      });
    });
  }
}
