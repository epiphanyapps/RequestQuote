import { type Schema } from 'amplify/data/resource';
import { Amplify } from 'aws-amplify';
import { configureAutoTrack } from 'aws-amplify/analytics';
import { generateClient } from 'aws-amplify/api'; // import { EnvEnv } from 'env';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import CardComponent from '@/components/card-component';
import { CarouselComponent } from '@/components/carousel-component';
import { FAQ } from '@/components/faq';
import { MenuBar } from '@/components/menu-bar';
import { RequestQuoteForm } from '@/components/request-quote-form';
import { Reviews } from '@/components/reviews';
import { Text } from '@/components/ui';
import { translate, useSelectedLanguage } from '@/lib';

import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);
// localStorage.clear(); //TODO: remove

configureAutoTrack({
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // REQUIRED, the event type, it's one of 'event', 'pageView' or 'session'
  type: 'pageView',
  // OPTIONAL, additional options for the tracked event.
  options: {
    // OPTIONAL, the attributes of the event
    attributes: {
      customizableField: 'attr',
    },

    // OPTIONAL, the event name. By default, this is 'pageView'
    eventName: 'pageView',

    // OPTIONAL, the type of app under tracking. By default, this is 'multiPageApp'.
    // You will need to change it to 'singlePage' if your app is a single-page app like React
    appType: 'singlePage',

    // OPTIONAL, provide the URL for the event.
    urlProvider: () => {
      // the default function
      return window.location.origin + window.location.pathname;
    },
  },
});

// eslint-disable-next-line max-lines-per-function
const Home = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const client = generateClient<Schema>();
  const { language, setLanguage } = useSelectedLanguage();
  const [newsletterProps, setNewsletterProps] = useState({
    title: translate('home.title'),
    subtitle: translate('home.subtitle'),
    placeholder: translate('home.enterEmail'),
    buttonText: translate('home.signUp'),
    successMessage: successMessage,
    errorMessage: null,
    zipPlaceholder: translate('home.zipCode'),
  });
  const [hasSubmittedQuote, setHasSubmittedQuote] = useState<boolean>(false);

  // Hydrate hasSubmittedQuote from local storage
  useEffect(() => {
    const storedValue = localStorage.getItem('hasSubmittedQuote');
    if (storedValue === 'true') {
      setHasSubmittedQuote(true);
    }
  }, []);

  // Replace the direct items and faqData declarations with memoized versions
  const items = useMemo(
    () => [
      {
        title: translate('home.benefits.title1'),
        content: translate('home.benefits.content1'),
        image: 'path/to/image1.jpg',
      },
      {
        title: translate('home.benefits.title2'),
        content: translate('home.benefits.content2'),
        image: 'path/to/image2.jpg',
      },
      {
        title: translate('home.benefits.title3'),
        content: translate('home.benefits.content3'),
        image: 'path/to/image3.jpg',
      },
      {
        title: translate('home.benefits.title4'),
        content: translate('home.benefits.content4'),
        image: 'path/to/image4.jpg',
      },
    ],
    []
  );

  const faqData = useMemo(
    () => [
      {
        question: translate('home.faq.question1'),
        answer: translate('home.faq.answer1'),
      },
      {
        question: translate('home.faq.question2'),
        answer: translate('home.faq.answer2'),
      },
      {
        question: translate('home.faq.question3'),
        answer: translate('home.faq.answer3'),
      },
      {
        question: translate('home.faq.question4'),
        answer: translate('home.faq.answer4'),
      },
      {
        question: translate('home.faq.question5'),
        answer: translate('home.faq.answer5'),
      },
      {
        question: translate('home.faq.question6'),
        answer: translate('home.faq.answer6'),
      },
    ],
    []
  );

  const [cardProps, setCardProps] = useState({
    title: translate('home.benefitsTitle'),
    items: items,
  });

  const [faqProps, setFaqProps] = useState({
    faqItems: faqData,
    title: translate('home.faqTitle'),
  });

  // Update cardProps and faqProps when language changes
  useEffect(() => {
    // lets repopulate newsletterProps here
    setNewsletterProps({
      title: translate('home.title'),
      subtitle: translate('home.subtitle'),
      placeholder: translate('home.enterEmail'),
      buttonText: translate('home.signUp'),
      successMessage: successMessage,
      errorMessage: null,
      zipPlaceholder: translate('home.zipCode'),
    });

    // Update cardProps and faqProps when language changes
    setCardProps({
      title: translate('home.benefitsTitle'),
      items: items,
    });

    setFaqProps({
      faqItems: faqData,
      title: translate('home.faqTitle'),
    });
  }, [
    language,
    setNewsletterProps,
    successMessage,
    setCardProps,
    setFaqProps,
    items,
    faqData,
  ]);

  const handleNewsletterCallback = async (
    name?: string,
    email: string,
    content: string
  ) => {
    console.log('handleNewsletterCallback', name, email, content);
    try {
      const vars = {
        email: email,
        content: content,
        name: name,
      };
      console.log('vars', vars);
      const result = await client.queries.requestQuote(vars);
      console.log('result', result);
      if (result.errors) {
        console.log(result.errors);
        // setSuccessMessage(translate('home.successAlreadyRegistered'));
        //@ts-ignore
        setNewsletterProps((prevProps) => ({
          ...prevProps,
          errorMessage: translate('home.errorMessage'),
        }));
      }
      if (!result.data?.success) {
        console.log(result);
        setSuccessMessage(translate('home.successAlreadyRegistered'));
        //@ts-ignore
        setNewsletterProps((prevProps) => ({
          ...prevProps,
          errorMessage: translate('home.errorMessage'),
        }));
      } else {
        setSuccessMessage(translate('home.success'));
        setHasSubmittedQuote(true);
        localStorage.setItem('hasSubmittedQuote', 'true');
        setNewsletterProps((prevProps) => ({
          ...prevProps,
          errorMessage: null,
        }));
      }
      return result;
    } catch (error) {
      console.log('error', error);
      //@ts-ignore
      setNewsletterProps((prevProps) => ({
        ...prevProps,
        errorMessage: translate('home.errorMessage'),
      }));
    }
  };

  const { width } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <MenuBar
          lang={language}
          onLanguageChange={(lang) => {
            setLanguage(lang);
          }}
        />
        <View style={styles.overlay} />
        <View
          // style={[styles.header, headerStyle]}
          className={`flex  items-center justify-center ${
            width >= 1024 ? 'flex-row' : 'flex-col'
          }`} // Add this line
        >
          <View className="flex-1 items-center justify-center p-12">
            <Text
              className="text-center text-2xl text-white"
              children="Over a decade of professional experience in all facets of electrical repairs and installations"
            ></Text>
            <Text
              className=" text-lg text-white"
              children="We specialize in creating beautiful, functional websites and mobile apps."
            ></Text>
            <View>
              <Text className="text-white" children="dddd"></Text>
              <Text className="text-white" children="dddd"></Text>
            </View>
          </View>
          <View className="flex-1 items-center justify-center p-12">
            <RequestQuoteForm
              onSubmit={
                hasSubmittedQuote
                  ? () => {
                      localStorage.removeItem('hasSubmittedQuote');
                      setHasSubmittedQuote(false);
                      window.location.reload();
                      return true;
                    }
                  : (data) => {
                      return handleNewsletterCallback(
                        data.name,
                        data.email,
                        data.content
                      );
                    }
              }
              hasSubmittedQuote={hasSubmittedQuote}
            />
          </View>
        </View>
      </ImageBackground>

      <View className="justify-center p-4 align-middle">
        <Reviews />
        <CarouselComponent
          urls={[
            { url: 'https://picsum.photos/200/301', name: '1' },
            { url: 'https://picsum.photos/201/302', name: '2' },
            { url: 'https://picsum.photos/203/303', name: '3' },
          ]}
        />
        <CardComponent title={cardProps.title} items={cardProps.items} />
        <FAQ faqItems={faqProps.faqItems} title={faqProps.title} />
        {/* <View style={styles.footer}></View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    flex: 1,
    backgroundColor: '#0000',
    // padding: 20,
  },
  headerBackground: {
    height: 950,
    width: '100%',
    // marginBottom: 40,
  },
  header: {
    // paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  faq: {
    marginBottom: 40,
  },
  faqTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  footer: {
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Home;
