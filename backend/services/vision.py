import os
import sys
import traceback
from openai import OpenAI
from dotenv import load_dotenv, find_dotenv
import logging

#'gpt-3.5-turbo-0125'
class CodeVision:
    def __init__(self, model='gpt-4o', temperature=0.1):
        try:
            load_dotenv(find_dotenv())
            self.client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
            self.model = model
            self.temperature = temperature
            logging.basicConfig(level=logging.INFO)
        except Exception as e:
            logging.error(f"An error occurred during initialization: {e}")
            raise

    def vision_eyes(self, system_message, message):
        messages = [{
            "role": "system",
            "content": system_message
        }, {
            "role": "user",
            "content": message
        }]
        
        try:
            completion = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=self.temperature,
            )

            translated = completion.choices[0].message.content

        except Exception as e:
            logging.error(f"An error occurred during translation: {e}")
            return None

        return translated


if __name__ == "__main__":
    try:
        system_message = sys.argv[1]
        message = sys.argv[2]
        vision = CodeVision()
        items = vision.vision_eyes(system_message, message)
        if items is not None:
            print(items)
        else:
            print("Translation failed", file=sys.stderr)
    except Exception as e:
        print("An error occurred:", file=sys.stderr)
        traceback.print_exc(file=sys.stderr)
        sys.exit(1)